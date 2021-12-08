import React from 'react';
import Accordion from './Accordion';

function Filters(props) {
  return (
    <div className="accordion__section">
      <Accordion
        title="همه دسته بندی ها"
        content={
          <div>
            <Accordion
              title="برنامه نویسی وب"
              content={
                <div>
                  <Accordion title="react" />
                  <Accordion title="node js" />
                  <Accordion title="vue js" />
                </div>
              }
            />
            <Accordion
              title="گرافیک"
              content={
                <div>
                  <Accordion title="Adobe xd" />
                  <Accordion title="Figma" />
                  <Accordion title="Adobe photoshop" />
                  <Accordion title="UI/UX" />
                  <Accordion title="Adobe illustrator" />
                </div>
              }
            />
            <Accordion
              title="برنامه نویسی بک"
              content={
                <div>
                  <Accordion title="react" />
                  <Accordion title="node js" />
                  <Accordion title="vue js" />
                </div>
              }
            />
          </div>
        }
        subsection={true}
      />
    </div>
  );
}

export default Filters;
