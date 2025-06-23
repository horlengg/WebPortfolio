
import MarkdownIt from "markdown-it";
import hljs from "highlight.js"


// full options list (defaults)
const md = MarkdownIt({
    // Enable HTML tags in source
    html:true,
  
    // Use '/' to close single tags (<br />).
    // This is only for full CommonMark compatibility.
    xhtmlOut:     false,
  
    // Convert '\n' in paragraphs into <br>
    breaks:       false,
  
    // CSS language prefix for fenced blocks. Can be
    // useful for external highlighters.
    langPrefix:   'language-',
  
    // Autoconvert URL-like text to links
    linkify:      false,
  
    // Enable some language-neutral replacement + quotes beautification
    // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs
    typographer:  false,
  
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '“”‘’',
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externally.
    // If result starts with <pre... internal wrapper is skipped.
    highlight: function (str: string, lang: string): string {
        if (lang && hljs.getLanguage(lang)) {
          try {
            console.log({lang});
            
            return '<pre class="hljs"><code>' +
                   hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                   '</code></pre>';
          } catch (_) {
            // fallback to escaped version
          }
        }
        return '<pre class="hljs"><code>' + MarkdownIt().utils.escapeHtml(str) + '</code></pre>';
      }
});

export function converMdToHTML(str : string){
    return md.render(str);
}




// export async function run() {
//     const files = import.meta.glob('/src/app/documentation/*.md',{ as: 'raw' });
    
//     for (const path in files) {
//         const content = await files[path]();
//         console.log(converMdToHTML(content));
//         console.log("=====================");        
//     }
//   }