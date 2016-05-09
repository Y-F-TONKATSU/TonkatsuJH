module.exports = function(grunt) {
	
	//Definitions of variables
	var pkg = grunt.file.readJSON('package.json');
	var cont;
	
	//Directories
	var root = '../../';
	var assets = root + '_dev/assets/';
	var testScriptDest = root + '_dev/assets/script/test/test-min.js';
	var testCssDest = root + '_dev/assets/css/test-min.css';
	var tonkatsuScriptDest = root + 'public/assets/script/tonkatsu.js';
	
	//RegExp
	var CATEGORY_LIST = ['top', 'writing', 'kinema', 'image', 'experimental', 'apps', 'whats'];
	var modePattern = '(';
	for (var i in CATEGORY_LIST){
		modePattern += CATEGORY_LIST[i];
		if(i == CATEGORY_LIST.length -1){
			modePattern += ')';
		} else {
			modePattern += '|';
		}
	}
	//for replacing
	var META_REGEXP = new RegExp('<!--meta--' + modePattern + '(\\d{6})-->');
	var HEADER_REGEXP = new RegExp('<!--header--' + modePattern + '(\\d{6})-->');
	var FOOTER_REGEXP = new RegExp('<!--footer--' + modePattern + '(\\d{6})-->');
	var ADS_REGEXP = new RegExp('<!--ad--(.+?)-->');
	var CJS_REGEXP = new RegExp('<!--cjs--' + modePattern + '(\\d{6})-->');
	
	//List for JS Files that compose site's script file
	var jsList = [
		'../../_dev/assets/script/tonkatsu.js',
		'../../_dev/assets/script/lib/canvas-handler.js',
		'../../_dev/assets/script/lib/url-handler.js',
		'../../_dev/assets/script/lib/scroll-handler.js',
		'../../_dev/assets/script/lib/hash.js',
		'../../_dev/assets/script/ui/display/display-util.js',
		'../../_dev/assets/script/ui/display/dom-handler.js',        
		'../../_dev/assets/script/ui/display/background-handler.js',
		'../../_dev/assets/script/ui/animators/cjs_animator.js',
		'../../_dev/assets/script/ui/animators/draw_rec_animator.js',
		'../../_dev/assets/script/cjs/cjs-loader.js',
		'../../_dev/assets/script/cjs/abs/abs_cjs.js'
	];
	
	/* Util Funcs */
	var fillDigits = function(n){
		var zeroLen = 6 - n.toString().length;
		var zeros = '';
		for (var i = 0; i < zeroLen; i++){
			zeros += '0';
		}
		return zeros + n.toString();
	}
	
	var escapeText = function(str){
		var res = str.replace(/\'/g, "&#39;");
		return res;
	};
	
	var contentsJson;
	var getContents = function(){
		if(!contentsJson) {
			contentsJson = grunt.file.readJSON('../../_processing/docs/contents.json');
		}
		return contentsJson;
	}
	
	var adsList;
	var getAdsList = function(){
		if(!adsList) {
			adsList = grunt.file.read('../../_dev/contents/ads/ads.html');
		}
		return adsList;
	}
	
	var getMetaTags = function(hash){
		
		var match = META_REGEXP.exec(hash);
		var category = match[1];
		var id = match[2];
		
		var contents = getContents();
		
		var i;
		var items = contents.rss.channel.item;
		for (var j in items){
			if(items[j].category == category && items[j].id == id){
				i = j;
			}
		}
	
		var description = escapeText(items[i].description);
		var title = escapeText(items[i].title);
		var keywords = escapeText(items[i].tags);
		var type = escapeText(items[i].type);
		var url = items[i].link;
		if (!items[i].mainThumb){
			var thumb = 'assets/images/common/og.jpg';
		} else {
			var thumb = items[i].mainThumb;
		}
		var siteName = 'とんかつひろば';
		var index = "http://ton-katsu.net/#" + category + "000000";
		var current = "http://ton-katsu.net/#" + category + id;
		var prev = "http://ton-katsu.net/#" + category + fillDigits(parseInt(id) - 1);
		var next = "http://ton-katsu.net/#" + category + fillDigits(parseInt(id) + 1);
		
		var tags = "<meta charset='utf-8'>\n" +
		"\t\t<meta name='keywords' content='" + keywords + "' />\n" + 
		"\t\t<meta name='description' content='" + description + "' />\n" +
		"\t\t<meta property='og:title' content='" + title + "' />\n" + 
		"\t\t<meta property='og:type' content='" + type + "' />\n" +
		"\t\t<meta property='og:url' content='" + url + "' />\n" +
		"\t\t<meta property='og:image' content='" + thumb + "' />\n" +
		"\t\t<meta property='og:site_name' content='" + siteName + "' />\n" +
		"\t\t<meta property='og:description' content='" + description + "' />\n" +
		"\t\t<meta property='fb:admins' content='100001501165698' />\n\n" +
		"\t\t<link rel='index' href='" + index + "' />\n" +
		"\t\t<link rel='prev' href='" + prev + "' />\n" +
		"\t\t<link rel='next' href='" + next + "' />\n\n" +
		"\t\t<link rel='shortcut icon' href='/favicon.ico' />\n\n" +
		"\t\t<title>" + title + "</title>\n\n" +
		"\t\t<script type='text/javascript'>\n" +
		"\t\t\twindow.location = '" + current + "';\n" +
		"\t\t</script>";
		
		return tags;
		
	};
	
	var getHeader = function(hash){
		
		return '';
		
	};
	
	var getFooter = function(hash){
		
		var match = FOOTER_REGEXP.exec(hash);
		var category = match[1];
		var id = match[2];
		
		var contents = getContents();
		
		var i,j;
		var items = contents.rss.channel.item;
		for (var j in items){
			if(items[j].category == category && items[j].id == id){
				i = j;
			}
		}
		
		var d = new Date(items[i].pubDate);
		var year = d.getFullYear();
		var month = d.getUTCMonth() + 1;
	
		var tags = 	"<div class='outer ranking'>\n\n" + 
				"\t\t\t<div class='inner ranking'>\n\n" + 
					"\t\t\t\t<a href='http://art.blogmura.com/creativeactivity/ranking.html' target='_blank'>" + 
					"<img class='noEdit' src='http://art.blogmura.com/creativeactivity/img/creativeactivity88_31.gif' width='88' height='31' border='0' alt='にほんブログ村 美術ブログ 創作活動・創作日記へ' /></a><br><a href='http://art.blogmura.com/creativeactivity/ranking.html' target='_blank'></a>\n" + 
					"\t\t\t\t<a href='http://blogranking.fc2.com/in.php?id=912671' target='_blank'><img class='noEdit' src='http://blogranking.fc2.com/ranking_banner/a_01.gif' style='border:0px;'></a><br>\n" + 
					"\t\t\t\t<a href='http://blog.with2.net/link.php?1698716'>人気ブログランキングへ</a><br>\n" + 
					"\t\t\t\t(" + year + "年 " + month + "月 山田.F.とんかつ)\n" +
				"\t\t\t</div>\n\n" + 
			"\t\t</div>";
		
		return tags;
		
	};
	
	var getAds = function(tag){
		
		var match = ADS_REGEXP.exec(tag);
		var id = match[1];
		
		var list = getAdsList();
		
		var result = RegExp("<div id='" + id + "'>[\\S\\s]*?<\\/div>").exec(list)[0];
		return result;
		
	};
	
	var getCjs = function(hash){
		
		var match = CJS_REGEXP.exec(hash);
		var category = match[1];
		var id = match[2];
		
		var contents = getContents();
		
		var i;
		var items = contents.rss.channel.item;
		for (var j in items){
			if(items[j].category == category && items[j].id == id){
				i = j;
			}
		}
		
		var path = items[i].cjs;
		var imagePath = items[i].cjsImages;
		
		var script = grunt.file.read('../../_processing/' + path);
		
		//Fix Image Path
		var r = script.replace(/{src:"/g, '{src:"' + imagePath);
		
		var tag = '<script>' + r + '</script>';

		return tag;
		
	};
	
	var getWidgets = function(){
		
		var contents = getContents();
		
		var list = '';
		
		var items = contents.rss.channel.item;
		var i = 0;
		for (i in items){
			
			var category = items[i].category;
			var id = items[i].id;
			
			var subCategory;
			if (!items[i].subCategory){
				subCategory = '';
			} else {
				subCategory = escapeText(items[i].subCategory);
			}
			
			var series;
			if (!items[i].series){
				series = '';
			} else {
				series = escapeText(items[i].series);
			}
			
			var layout = items[i].layout;
			var hash = '#' + category + id;
			var title = escapeText(items[i].title);
			var description = escapeText(items[i].description);
			
			var mainThumb;
			if (!items[i].mainThumb){
				mainThumb = 'assets/images/common/og.jpg';
			} else {
				mainThumb = items[i].mainThumb;
			}
			
			var thumbs = "";
			if(items[i].thumb){
				if(typeof items[i].thumb === 'string'){
					thumbs += "\t\t\t\t\t\t\t<img class='widget_thumb' data-src='" + items[i].thumb + "'>\n";
				} else {
					var j = 0;
					for (j in items[i].thumb){
						thumbs += "\t\t\t\t\t\t\t<img class='widget_thumb' data-src='" + items[i].thumb[j] + "'>\n";
					}
				}
			}
			
			var d = new Date(items[i].pubDate);
			var year = d.getFullYear();
			var month = d.getUTCMonth() + 1;
			var date = year + '年 ' + month + '月';
	
			list += "<li class='widget' data-widget-category='" + category + "' data-widget-sub-category='" + subCategory + "' data-widget-series='" + series + "' data-layout-mode='" + layout + "'>\n\n" + 
			"\t\t\t\t\t\t<a class='widget_link' href='" + hash + "'>\n\n" +
			"\t\t\t\t\t\t\t<div class='widget_title'>" + title + "</div>\n" + 
			"\t\t\t\t\t\t\t<div class='widget_description'>" + description + "</div>\n" +
			"\t\t\t\t\t\t\t<div class='widget_date'>" + date + "</div>\n" +
			"\t\t\t\t\t\t\t<img class='widget_mainThumb' src='" + mainThumb + "'>\n" + 
			thumbs + "\n" +
			"\t\t\t\t\t\t</a>\n\n" + 
			"\t\t\t\t\t</li>\n\n\t\t\t\t\t";

		}
		
		return list;
				
	};
	/* Util Funcs End */
	
	//Init Task Options
	grunt.initConfig({
		
		concat: {
			test: {
				src: [
					'../mocha/mocha.js', '../chai/chai.js',
					'../mocha/mocha-setup.js'
				],
				dest: testScriptDest
			},
			less_landscape:{
				src: ['../../_dev/assets/less/layout_main_common.less', '../../_dev/assets/less/layout_main_landscape.less'],
				dest:'../../_processing/assets/css/layout_main_landscape.less'
			},
			less_portrait:{
				src: ['../../_dev/assets/less/layout_main_common.less', '../../_dev/assets/less/layout_main_portrait.less'],
				dest:'../../_processing/assets/css/layout_main_portrait.less'
			},
			js_main:{
				src: jsList,
				dest:tonkatsuScriptDest
			}
		},
		
		uglify: {
			test: {
				src: testScriptDest,
				dest: testScriptDest
			},
			js_main: {
				src: tonkatsuScriptDest,
				dest: tonkatsuScriptDest
			},
			js_cont: {
			  files: [{
				  expand: true,
				  cwd: '../../_processing/contents/',
				  src: '**/*.js',
				  dest: '../../_processing/contents/'
			  }]
			}
		},
		
		less: {
			css_main: {
				files: {
					'../../_processing/assets/css/base.css':['../../_dev/assets/less/base.less']
				}
			},
			css_landscape: {
				files: {
					'../../_processing/assets/css/layout_main_landscape.css':['../../_processing/assets/css/layout_main_landscape.less']
				}
			},
			css_portrait: {
				files: {
					'../../_processing/assets/css/layout_main_portrait.css':['../../_processing/assets/css/layout_main_portrait.less']
				}
			}
		},
		
		autoprefixer: {
			options: {
			},
			css_main:{
				src: '../../_processing/assets/css/base.css',
				dest: '../../_processing/assets/css/base-vender-fixed.css'
			},
			css_landscape:{
				src: '../../_processing/assets/css/layout_main_landscape.css',
				dest: '../../_processing/assets/css/layout_main_landscape-vender-fixed.css'
			},
			css_portrait:{
				src: '../../_processing/assets/css/layout_main_portrait.css',
				dest: '../../_processing/assets/css/layout_main_portrait-vender-fixed.css'
			}
		},
		
		cssmin: {
			test: {
				files: [
					{
						src: '../mocha/mocha.css',
						dest: testCssDest
					}
				]
			},
			css_main: {
				files: [
					{
						src:'../../_processing/assets/css/base-vender-fixed.css',
						dest:'../../public/assets/css/base-min.css'
					}
				]
			},
			css_landscape: {
				files: [
					{
						src:'../../_processing/assets/css/layout_main_landscape-vender-fixed.css',
						dest:'../../public/assets/css/layout_main_landscape-min.css'
					}
				]
			},
			css_portrait: {
				files: [
					{
						src:'../../_processing/assets/css/layout_main_portrait-vender-fixed.css',
						dest:'../../public/assets/css/layout_main_portrait-min.css'
					}
				]
			}
		},
		
		clean: {
			options:{
				force:true
			},
			image: ['../../public/assets/images/*', '../../_processing/assets/images/*'],
			main: ['../../_processing/assets/script/*', '../../_processing/docs/*'],
			contents: ['../../_processing/contents/*', '../../public/contents/*']
		},
		
		htmlmin: {
			main: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'../../_processing/docs/index_widgets_min.html': '../../_processing/docs/index_widgets.html'
				}
			},
			contents: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: [{
					expand:true,
					overwrite:true,
					cwd: '../../_processing/contents/',
					src: ['**/*.html'],
					dest: '../../public/contents/'
				}]
			}
		},
		
		copy: {
			options:{
			},
			image_s: {
				expand:true,
				cwd: '../../_dev/assets/images/',
				src: ['**'],
				dest: '../../_processing/assets/images'
			},
			image_m: {
				expand:true,
				cwd: '../../_dev/assets/images/',
				src: ['**'],
				dest: '../../public/assets/images'
			},
			main: {
				src: '../../_processing/docs/index_widgets_min.html',
				dest: '../../public/index.html'
			},
			favicon: {
				src: '../../_dev/favicon.ico',
				dest: '../../public/favicon.ico'
			},
			contents: {
				expand:true,
				cwd: '../../_dev/contents/',
				src: ['**'],
				dest: '../../_processing/contents'
			},
			contents_2: {
				expand:true,
				cwd: '../../_processing/contents',
				src: ['**'],
				dest: '../../public/contents'
			},
		},
		
		responsive_images: {
			image: {
				options: {
					engine:'im',
					sizes: [{
						name:'small',
						width: '50%',
						height: '50%'
					}]
				},
				files: [{
					expand: true,
					cwd: '../../_processing/assets/images/',
					src: ['**/*.{jpg,gif,png}'],
					dest: '../../public/assets/images/'
				}]
			}
		},
		
		watch: {
			experimental: {
				tasks: ['less', 'autoprefixer', 'cssmin'],
				files: ['../../_dev/assets/less/test.less']
			}
		},
		
		replace: {
			main: {
				src: ['../../_dev/index.html'],
				dest: '../../_processing/docs/index_widgets.html',
				replacements: [{
					from: '<!--Widgets-->', 
					to: function(matchword){
						return getWidgets();
					}
				}]
			},
			contents: {
				src: ['../../_processing/contents/**/*.html'],
				overwrite: true,
				replacements: [{
					from: META_REGEXP, 
					to: function(hash){
						return getMetaTags(hash);
					}
				}]
			},
			contents_header: {
				src: ['../../_processing/contents/**/*.html'],
				overwrite: true,
				replacements: [{
					from: HEADER_REGEXP, 
					to: function(hash){
						return getHeader(hash);
					}
				}]
			},
			contents_footer: {
				src: ['../../_processing/contents/**/*.html'],
				overwrite: true,
				replacements: [{
					from: FOOTER_REGEXP, 
					to: function(hash){
						return getFooter(hash);
					}
				}]
			},
			contents_ad: {
				src: ['../../_processing/contents/**/*.html'],
				overwrite: true,
				replacements: [{
					from: ADS_REGEXP, 
					to: function(id){
						return getAds(id);
					}
				},{
					from: ADS_REGEXP, 
					to: function(id){
						return getAds(id);
					}
				},{
					from: ADS_REGEXP, 
					to: function(id){
						return getAds(id);
					}
				}]
			},
			contents_cjs: {
				src: ['../../_processing/contents/**/*.html'],
				overwrite: true,
				replacements: [{
					from: CJS_REGEXP, 
					to: function(hash){
						return getCjs(hash);
					}
				}]
			}
		},
		
		convert: {
			options: {
				explicitArray: false,
			},
			xml2json: {
				src: ['../../_dev/contents.xml'],
				dest: '../../_processing/docs/contents.json'
			}
		}
		
		
	});
	
	//Auto-Loading Tasks
	require('load-grunt-tasks')(grunt);	
	
	//Organize Tasks
	var baseTasks = ['convert'];
	var cleanTasks = ['clean:main'].concat(baseTasks);
	var jsTasks = ['concat:js_main', 'uglify:js_main'];
	var cssTasks = ['concat:less_landscape', 'concat:less_portrait', 'less:css_main', 'less:css_landscape', 'less:css_portrait', 'autoprefixer:css_main', 'autoprefixer:css_landscape', 'autoprefixer:css_portrait', 'cssmin:css_main', 'cssmin:css_landscape', 'cssmin:css_portrait'];
	var htmlTasks = ['replace:main', 'htmlmin:main', 'copy:main', 'copy:favicon'];
	var mainTasks = cleanTasks.concat(jsTasks.concat(cssTasks.concat(htmlTasks)));
	
	var contTasks = baseTasks.concat(['clean:contents', 'convert', 'copy:contents', 'uglify:js_cont', 'replace:contents', 'replace:contents_header', 'replace:contents_footer', 'replace:contents_ad','replace:contents_cjs',  'copy:contents_2', 'htmlmin:contents']);
	
	var imageTasks = ['clean:image', 'copy:image_s', 'responsive_images', 'copy:image_m'];
	
	var allTasks = mainTasks.concat(contTasks.concat(imageTasks));
	
	var testTasks = ['concat:test', 'uglify:test', 'cssmin:test'];
	
	grunt.registerTask('default', mainTasks);
	grunt.registerTask('cont', contTasks);	
	grunt.registerTask('img', imageTasks);
	grunt.registerTask('all', allTasks);
	grunt.registerTask('js', jsTasks);
	grunt.registerTask('css', cssTasks);
	grunt.registerTask('html', baseTasks.concat(htmlTasks));
	
	grunt.registerTask('test', testTasks);
	//grunt.registerTask('watch', ['watch']);
	
};