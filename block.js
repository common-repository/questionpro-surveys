const el = wp.element.createElement;
const registerBlockType = wp.blocks.registerBlockType;
const PanelBody = wp.components.PanelBody;
const TextControl = wp.components.TextControl;
const InspectorControls = wp.editor.InspectorControls;

const iconEl = el(
  "svg",
  { viewBox: "0 0 180 180" },
  el("rect", { fill: "#1b3380", width: "180", height: "180", rx: 20, ry: 20 }),
  el("path", {
    fill: "#fff",
    d: "M78.5,143A10.5,10.5,0,1,1,68,132.5,10.5,10.5,0,0,1,78.5,143Z"
  }),
  el("path", {
    fill: "#fff",
    d:
      "M108,31H58V51h50a15,15,0,0,1,0,30H58v20h0v20H78V101h30a35,35,0,0,0,0-70Z"
  })
);

registerBlockType("questionpro/surveys", {
  title: "QuestionPro Surveys",
  icon: iconEl,
  category: "common",
  attributes: {
    url: { type: "string", default: "" },
    width: { type: "string", default: "100%" },
    height: { type: "string", default: "500px" }
  },
  edit: function(props) {
    function onChangeUrl(content) {
      props.setAttributes({ url: content });
    }
    function onChangeWidth(content) {
      props.setAttributes({ width: content });
    }
    function onChangeHeight(content) {
      props.setAttributes({ height: content });
    }

    return [
      el(
        InspectorControls,
        null,
        el(
          PanelBody,
          {
            title: "Basic",
            initialOpen: true
          },
          el(TextControl, {
            label: "Survey URL",
            value: props.attributes.url,
            onChange: function(str) {
              onChangeUrl(str);
            }
          }),
          el(TextControl, {
            label: "Width",
            value: props.attributes.width,
            onChange: function(str) {
              onChangeWidth(str);
            }
          }),
          el(TextControl, {
            label: "Height",
            value: props.attributes.height,
            onChange: function(str) {
              onChangeHeight(str);
            }
          })
        )
      ),
      el("iframe", {
        src: props.attributes.url.includes("questionpro")
          ? props.attributes.url
          : "",
        width: props.attributes.width,
        height: props.attributes.height
      })
    ];
  },
  save: function(props) {
    return el("h3", null, "hola");
  }
});
