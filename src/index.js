import "./utils/global.js";

const Anchor = DOM.Create.HTMLElement("a", {
    ClassNames: ["Anchor", "FB-link"],
    Id: "Link",
    Text: "Facebook",
    Styles: {
        all: "unset",
        backgroundColor: "#3064a0",
        color: "#fff",
        padding: "5px 10px",
        fontSize: "15px",
        fontWeight: "600",
        letterSpacing: "2px",
        margin: "10px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    tooltip: "Direct link: Facebook.com",
    href: "https://www.facebook.com/"
});

const View = document.querySelector("#view");
DOM.Mount(View, Anchor)
console.log(window);
