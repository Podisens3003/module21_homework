const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>

    <age>35</age>

    <prof>teacher</prof>
    
  </student>
  <student>

    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>

    <age>58</age>

    <prof>driver</prof>

  </student>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentsNodes = listNode.querySelectorAll("student");
const result = {
  list: []
};


for (let studentNode of studentsNodes) {
  const nameNode = studentNode.querySelector("name");
  const langAttr = nameNode.getAttribute("lang");
  const firstNode = nameNode.querySelector("first");
  const secondNode = nameNode.querySelector("second");

  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");

  result.list.push({
    name: `${firstNode.textContent} ${secondNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  })
}
console.log(result);
