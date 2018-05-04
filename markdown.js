const dataset = [
  { type: 'h1', value: 'Welcome to our docs!' },
  { type: 'h2', value: 'Best framework, yo' },
  { type: 'link', link: { text: 'click me', url: 'google.com' } }
];

let markdown = '';

const builder = function(data) {
  data.forEach(element => {
    const { value, type, link } = element;

    if (type === 'h1') {
      markdown += `# ${value}`;
    } else if (type === 'link') {
      markdown += `[${link.text}](${link.url})`;
    } else if (type === 'h2') {
      markdown += `## ${value}`;
    }
  });
  console.log('my markdown ', markdown);
};

// Build Markdown
builder(dataset);
