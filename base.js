module.exports = (palette) => ({
	"name": "offscreen canvas black",
	"colors": {
		"editor.background": palette.background,
		"editor.foreground": palette.white,
		// "editor.focusedStackFrameHighlightBackground": "#ff0000",
		"editor.lineHighlightBackground": "#171b2a",
		// "selection.background": "#ff0000",
		"editor.selectionBackground": "#1d2438",
		// "editorUnicodeHighlight.background": "#ff0000",
		// "banner.background": "#ff0000",
		"titleBar.activeBackground": palette.background,
		"panel.border": "#1d2234",
		"editorGroup.border": "#1d2234",
		// "editorGroup.": "#ff0000",
		"focusBorder": "#253046",

		"scrollbar.shadow": "#0b0d14",
		"scrollbarSlider.background": "#25304680",
		"scrollbarSlider.hoverBackground": "#2d3d5d80",
		"scrollbarSlider.activeBackground": "#171f31aa",
		"editorOverviewRuler.border": "#1d2234",
		
		"activityBarBadge.background": palette.background,
		"sideBarTitle.foreground": "#bbbbbb",
		"sideBar.background": palette.background,
		"statusBar.background": palette.background,
		"list.hoverForeground": palette.white,
		"list.hoverBackground": "#181928",
		"list.activeSelectionBackground": "#1e2337",
		// "list.focusBackground": "#1e2337",
		// "list.highlightForeground": "#ff0000"
		// list
		// 1e2337
		"gitDecoration.addedResourceForeground": palette.functions,
		"gitDecoration.modifiedResourceForeground": palette.keywords,
		"gitDecoration.untrackedResourceForeground": palette.numbers,
		// "redish": "#ff0000"
	},
	"tokenColors": [
		{
			"name": "Comment",
			"scope": [
				"comment",
				"punctuation.definition.comment"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": palette.comments
			}
		},
		{
			"name": "Variables",
			"scope": [
				"variable",
				"string constant.other.placeholder"
			],
			"settings": {
				"foreground": palette.white
			}
		},
		{
			"name": "Colors",
			"scope": [
				"constant.other.color"
			],
			"settings": {
				"foreground": palette.white
			}
		},
		{
			"name": "Invalid",
			"scope": [
				"invalid",
				"invalid.illegal"
			],
			"settings": {
				"foreground": "#FF5370"
			}
		},
		{
			"name": "Keyword, Storage, ariable lenguage, object keys",
			"scope": [
				"keyword",
				"storage.type",
				"storage.modifier",
				"variable.language",
				"meta.object-literal.key.js",
				"meta.object-literal.key.js string",
				"entity.name.tag",

			],
			"settings": {
				"foreground": palette.keywords
			}
		},
		{
			"name": "Operator, Misc",
			"scope": [
				"constant.other.color",
				"punctuation",
				"meta.tag",
				"punctuation.definition.tag",
				"punctuation.separator.inheritance.php",
				"punctuation.definition.tag.html",
				"punctuation.definition.tag.begin.html",
				"punctuation.definition.tag.end.html",
				"punctuation.section.embedded",
				"keyword.other.template",
				"keyword.other.substitution"
			],
			"settings": {
				"foreground": palette.punctuation
			}
		},
		{
			"name": "Tag",
			"scope": [
				"meta.tag.sgml",
				"markup.deleted.git_gutter"
			],
			"settings": {
				"foreground": "#f07178"
			}
		},
		{
			"name": "Function, Special Method",
			"scope": [
				"entity.name.function",
				"meta.function-call",
				"variable.function",
				"support.function",
				"entity.other.attribute-name.html",
				"keyword.other.special-method",
			],
			"settings": {
				"foreground": palette.functions
			}
		},
		{
			"name": "Block Level Variables",
			"scope": [
				"meta.block variable.other"
			],
			"settings": {
				"foreground": palette.white
			}
		},
		{
			"name": "Other Variable, String Link",
			"scope": [
				"support.other.variable",
				"string.other.link"
			],
			"settings": {
				"foreground": "#f07178"
			}
		},
		{
			"name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
			"scope": [
				"support.constant",
			],
			"settings": {
				"foreground": palette.white  
			}
		},
		{
			"name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
			"scope": [
				"constant.numeric",
				"constant.language",
				"constant.character",
				"constant.escape",
				"keyword.other.unit",
				"keyword.other",
				
			],
			"settings": {
				"foreground": palette.numbers  
			}
		},
		{
			"name": "String, Symbols, Inherited Class, Markup Heading",
			"scope": [
				"string",
				"constant.other.symbol",
				"constant.other.key",
				"markup.heading",
				"markup.inserted.git_gutter",
				"meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
				"meta.preprocessor.glsl"
			],
			"settings": {
				"foreground": palette.strings
			}
		},
		{
			"name": "Class, Support",
			"scope": [
				"entity.name",
				"support.type",
				"support.class",
				"entity.other.inherited-class",
				"support.other.namespace.use.php",
				"meta.use.php",
				"support.other.namespace.php",
				"markup.changed.git_gutter",
				"support.type.sys-types"
			],
			"settings": {
				"foreground": palette.white
			}
		},
		{
			"name": "Entity Types",
			"scope": [
				"support.type"
			],
			"settings": {
				"foreground": "#B2CCD6"
			}
		},
		{
			"name": "CSS Class and Support",
			"scope": [
				"source.css support.type.property-name",
				"source.sass support.type.property-name",
				"source.scss support.type.property-name",
				"source.less support.type.property-name",
				"source.stylus support.type.property-name",
				"source.postcss support.type.property-name"
			],
			"settings": {
				"foreground": palette.keywords
			}
		},
		{
			"name": "Sub-methods",
			"scope": [
				"entity.name.module.js",
				"variable.import.parameter.js",
				"variable.other.class.js"
			],
			"settings": {
				"foreground": "#FF5370"
			}
		},
		// {
		// 	"name": "Language methods",
		// 	"scope": [
		// 		"variable.language"
		// 	],
		// 	"settings": {
		// 		"fontStyle": "italic",
		// 		"foreground": "#FF5370"
		// 	}
		// },
		{
			"name": "entity.name.method.js",
			"scope": [
				"entity.name.method.js"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "#82AAFF"
			}
		},
		{
			"name": "meta.method.js",
			"scope": [
				"meta.class-method.js entity.name.function.js",
				"variable.function.constructor"
			],
			"settings": {
				"foreground": "#82AAFF"
			}
		},
		{
			"name": "Attributes",
			"scope": [
				"entity.other.attribute-name"
			],
			"settings": {
				"foreground": palette.strings
			}
		},
		{
			"name": "HTML Attributes",
			"scope": [
				"text.html.basic entity.other.attribute-name.html",
				"text.html.basic entity.other.attribute-name"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "#FFCB6B"
			}
		},
		{
			"name": "CSS Classes",
			"scope": [
				"entity.other.attribute-name.class"
			],
			"settings": {
				"foreground": "#FFCB6B"
			}
		},
		{
			"name": "CSS ID's",
			"scope": [
				"source.sass keyword.control"
			],
			"settings": {
				"foreground": "#82AAFF"
			}
		},
		{
			"name": "Inserted",
			"scope": [
				"markup.inserted"
			],
			"settings": {
				"foreground": "#C3E88D"
			}
		},
		{
			"name": "Deleted",
			"scope": [
				"markup.deleted"
			],
			"settings": {
				"foreground": "#FF5370"
			}
		},
		{
			"name": "Changed",
			"scope": [
				"markup.changed"
			],
			"settings": {
				"foreground": "#C792EA"
			}
		},
		{
			"name": "Regular Expressions",
			"scope": [
				"string.regexp"
			],
			"settings": {
				"foreground": "#89DDFF"
			}
		},
		{
			"name": "Escape Characters",
			"scope": [
				"constant.character.escape"
			],
			"settings": {
				"foreground": "#89DDFF"
			}
		},
		{
			"name": "URL",
			"scope": [
				"*url*",
				"*link*",
				"*uri*"
			],
			"settings": {
				"fontStyle": "underline"
			}
		},
		{
			"name": "Decorators",
			"scope": [
				"tag.decorator.js entity.name.tag.js",
				"tag.decorator.js punctuation.definition.tag.js"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "#82AAFF"
			}
		},
		{
			"name": "ES7 Bind Operator",
			"scope": [
				"source.js constant.other.object.key.js string.unquoted.label.js"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "#FF5370"
			}
		},
		{
			"name": "JSON Key - Level 0",
			"scope": [
				"source.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "#C792EA"
			}
		},
		{
			"name": "JSON Key - Level 1",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "#FFCB6B"
			}
		},
		{
			"name": "JSON Key - Level 2",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "#F78C6C"
			}
		},
		{
			"name": "JSON Key - Level 3",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "#FF5370"
			}
		},
		{
			"name": "JSON Key - Level 4",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "#C17E70"
			}
		},
		{
			"name": "JSON Key - Level 5",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "#82AAFF"
			}
		},
		{
			"name": "JSON Key - Level 6",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "#f07178"
			}
		},
		{
			"name": "JSON Key - Level 7",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "#C792EA"
			}
		},
		{
			"name": "JSON Key - Level 8",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "#C3E88D"
			}
		},
		{
			"name": "Markdown - Plain",
			"scope": [
				"text.html.markdown",
				"punctuation.definition.list_item.markdown"
			],
			"settings": {
				"foreground": palette.white
			}
		},
		{
			"name": "Markdown - Markup Raw Inline",
			"scope": [
				"text.html.markdown markup.inline.raw.markdown"
			],
			"settings": {
				"foreground": "#C792EA"
			}
		},
		{
			"name": "Markdown - Markup Raw Inline Punctuation",
			"scope": [
				"text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
			],
			"settings": {
				"foreground": "#65737E"
			}
		},
		{
			"name": "Markdown - Heading",
			"scope": [
				"markdown.heading",
				"markup.heading | markup.heading entity.name",
				"markup.heading.markdown punctuation.definition.heading.markdown"
			],
			"settings": {
				"foreground": "#C3E88D"
			}
		},
		{
			"name": "Markup - Italic",
			"scope": [
				"markup.italic"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "#f07178"
			}
		},
		{
			"name": "Markup - Bold",
			"scope": [
				"markup.bold",
				"markup.bold string"
			],
			"settings": {
				"fontStyle": "bold",
				"foreground": "#f07178"
			}
		},
		{
			"name": "Markup - Bold-Italic",
			"scope": [
				"markup.bold markup.italic",
				"markup.italic markup.bold",
				"markup.quote markup.bold",
				"markup.bold markup.italic string",
				"markup.italic markup.bold string",
				"markup.quote markup.bold string"
			],
			"settings": {
				"fontStyle": "bold",
				"foreground": "#f07178"
			}
		},
		{
			"name": "Markup - Underline",
			"scope": [
				"markup.underline"
			],
			"settings": {
				"fontStyle": "underline",
				"foreground": "#F78C6C"
			}
		},
		{
			"name": "Markdown - Blockquote",
			"scope": [
				"markup.quote punctuation.definition.blockquote.markdown"
			],
			"settings": {
				"foreground": "#65737E"
			}
		},
		{
			"name": "Markup - Quote",
			"scope": [
				"markup.quote"
			],
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"name": "Markdown - Link",
			"scope": [
				"string.other.link.title.markdown"
			],
			"settings": {
				"foreground": "#82AAFF"
			}
		},
		{
			"name": "Markdown - Link Description",
			"scope": [
				"string.other.link.description.title.markdown"
			],
			"settings": {
				"foreground": "#C792EA"
			}
		},
		{
			"name": "Markdown - Link Anchor",
			"scope": [
				"constant.other.reference.link.markdown"
			],
			"settings": {
				"foreground": "#FFCB6B"
			}
		},
		{
			"name": "Markup - Raw Block",
			"scope": [
				"markup.raw.block"
			],
			"settings": {
				"foreground": "#C792EA"
			}
		},
		{
			"name": "Markdown - Raw Block Fenced",
			"scope": [
				"markup.raw.block.fenced.markdown"
			],
			"settings": {
				"foreground": "#00000050"
			}
		},
		{
			"name": "Markdown - Fenced Bode Block",
			"scope": [
				"punctuation.definition.fenced.markdown"
			],
			"settings": {
				"foreground": "#00000050"
			}
		},
		{
			"name": "Markdown - Fenced Bode Block Variable",
			"scope": [
				"markup.raw.block.fenced.markdown",
				"variable.language.fenced.markdown",
				"punctuation.section.class.end"
			],
			"settings": {
				"foreground": palette.white
			}
		},
		{
			"name": "Markdown - Fenced Language",
			"scope": [
				"variable.language.fenced.markdown"
			],
			"settings": {
				"foreground": "#65737E"
			}
		},
		{
			"name": "Markdown - Separator",
			"scope": [
				"meta.separator"
			],
			"settings": {
				"fontStyle": "bold",
				"foreground": "#65737E"
			}
		},
		{
			"name": "Markup - Table",
			"scope": [
				"markup.table"
			],
			"settings": {
				"foreground": palette.white
			}
		}
	]
})
