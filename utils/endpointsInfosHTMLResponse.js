import { postsRoutesInfos } from "../routes/postsRoutes.js";

const endpointsInfo = {
  posts: {
    title: "Posts",
    infos: postsRoutesInfos,
  },
};

export default function endpointsInfosHTMLResponse(req, res) {
  let html = '<h1 style="color: red">API Endpoints</h1>';
  for (const key in endpointsInfo) {
    const endpoint = endpointsInfo[key];
    html += `<h2>${endpoint.title}:</h2>`;
    html += "<ul>";

    for (const info of endpoint.infos) {
      html += `<li><strong><small>${info.method}</small></strong> <a href="${info.path}" target="_blank">${info.path}</a> - ${info.description}</li>`;
    }
    html += "</ul>";
  }

  res.send(html);
}
