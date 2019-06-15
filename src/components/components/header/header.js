"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var js_logger_1 = require("js-logger");
var personal_info_1 = require("./../personal-info/personal-info");
require("./header.scss");
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    Header.prototype.render = function () {
        var person = this.props.headerData.person;
        js_logger_1["default"].debug("HeaderProps.person", person);
        js_logger_1["default"].debug("HeaderProps: ", this.props);
        return (<header role="banner" className="header">
        <div className="header__personal-info">
          <personal_info_1["default"] person={person}/>
        </div>
        <nav></nav>
      </header>);
    };
    return Header;
}(react_1["default"].PureComponent));
exports["default"] = Header;
