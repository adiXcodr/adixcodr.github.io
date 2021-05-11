import React from "react";
import { Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function ProjectList({ ProjectListVal }) {
  const history = useHistory();

  return (
    <div>
      {ProjectListVal &&
        ProjectListVal.map((Obj, index) => {
          return (
            <span
              key={`project-list-item-${index}`}
              className="project_list_item_link"
              onClick={() => {
                const win = window.open(Obj.projectRoute, "_blank");
                win.focus();
              }}
            >
              <div
                style={{
                  background:
                    `linear-gradient(120deg,` +
                    Obj.initialColor +
                    `,` +
                    Obj.finalColor +
                    `)`,
                }}
                className="project_list_item"
              >
                {Object.keys(Obj.badgeTitle).map((item, index) => {
                  return (
                    <Badge pill variant="primary" className="chip">
                      {Obj.badgeTitle[item]}
                    </Badge>
                  );
                })}
                <Badge pill variant="secondary" className="chip">
                  {Obj.language}
                </Badge>
                <p style={{marginTop:10,fontSize:20,fontWeight:"bold"}}>{Obj.title}</p>
                <p>{Obj.description}</p>
              </div>
            </span>
          );
        })}
    </div>
  );
}

export default ProjectList;
