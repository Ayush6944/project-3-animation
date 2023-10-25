import React, { useState } from 'https://esm.sh/react@18.2.0';
import cn from "https://cdn.skypack.dev/classnames@2.3.2";
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
function Demo() {
    const [switched, setSwitched] = useState(false);
    return (React.createElement("div", { className: "local-container" },
        React.createElement("div", { className: cn('demo', { 's--switched': switched }) },
            React.createElement("div", { className: "demo__inner" },
                React.createElement("div", { className: "demo__forms" },
                    React.createElement("div", { className: "demo__form" },
                        React.createElement("div", { className: "demo__form-content" },
                            React.createElement(FakeForm, { heading: "Welcome back", fields: ['email', 'password'], submitLabel: "Sign in" }))),
                    React.createElement("div", { className: "demo__form" },
                        React.createElement("div", { className: "demo__form-content" },
                            React.createElement(FakeForm, { heading: "Time to feel like home", fields: ['name', 'email', 'password'], submitLabel: "Sign up" })))),
                React.createElement("div", { className: "demo__switcher" },
                    React.createElement("div", { className: "demo__switcher-inner" },
                        React.createElement("div", { className: "demo__switcher-content" },
                            React.createElement("div", { className: "demo__switcher-text" },
                                React.createElement("div", null,
                                    React.createElement("h3", null, "New here?"),
                                    React.createElement("p", null, "Sign up and discover great amount of new opportunities!")),
                                React.createElement("div", null,
                                    React.createElement("h3", null, "One of us?"),
                                    React.createElement("p", null, "If you already has an account, just sign in. We've missed you!"))),
                            React.createElement("button", { className: "demo__switcher-btn", onClick: () => setSwitched(!switched) },
                                React.createElement("span", { className: "animated-border" }),
                                React.createElement("span", { className: "demo__switcher-btn-inner" },
                                    React.createElement("span", null, "Sign Up"),
                                    React.createElement("span", null, "Sign In"))))))))));
}
function FakeForm({ heading, fields, submitLabel }) {
    return (React.createElement("form", { className: "form", onSubmit: (e) => e.preventDefault() },
        React.createElement("div", { className: "form__heading" }, heading),
        fields.map((field) => (React.createElement("label", { className: "form__field", key: field },
            React.createElement("span", { className: "form__field-label" }, field),
            React.createElement("input", { className: "form__field-input", type: field })))),
        React.createElement("button", { type: "submit", className: "form__submit",name:'ayush' }, submitLabel)));
}
ReactDOM.render(React.createElement(Demo, null), document.querySelector('#demo'));

document.getElementsByClassName("form__submit").addEventListener("click", function(){ alert("Hello World!"); });

// alert("kgj");