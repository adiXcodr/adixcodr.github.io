import React from "react";
import { Badge } from "react-bootstrap";

function WorkExp({ WorkExpObj }) {
  return (
    <div>
      {WorkExpObj.map((Obj, index) => {
        return (
          <span
            key={`project-list-item-${index}`}
            className="project_list_item_link"
          // onClick={() => {
          //   const win = window.open(Obj.projectRoute, "_blank");
          //   win.focus();
          // }}
          >
            <div
              style={{
                background:
                  `linear-gradient(120deg,` +
                  "#11998e" +
                  `,` +
                  "#38ef7d" +
                  `)`,
              }}
              className="project_list_item"
            >
              {Object.keys(Obj.stack).map((item, index) => {
                return (
                  <Badge pill variant="primary" className="chip">
                    {Obj.stack[item]}
                  </Badge>
                );
              })}
              <p style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>{Obj.title}</p>
              <p>{Obj.description}</p>
              <p>{`${Obj.duration} - ${Obj.location}`}</p>
            </div>
          </span>
        );
      })}
    </div>
  );
}

export default WorkExp;
