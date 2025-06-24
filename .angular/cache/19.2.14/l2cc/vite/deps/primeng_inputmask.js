import {
  AutoFocus
} from "./chunk-ZCWJQK5W.js";
import {
  NG_VALUE_ACCESSOR,
  NgModel
} from "./chunk-T4YKZDR6.js";
import {
  TimesIcon
} from "./chunk-5CLUPFUN.js";
import {
  BaseComponent
} from "./chunk-JH3ACQ43.js";
import {
  BaseStyle
} from "./chunk-RVWQFZF2.js";
import {
  PrimeTemplate,
  SharedModule,
  getUserAgent,
  isClient,
  isEmpty
} from "./chunk-QTQIARG7.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-GBANFASH.js";
import {
  isPlatformBrowser
} from "./chunk-QZ2E34AJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-5QXQOMPN.js";
import "./chunk-P6U2JBMQ.js";
import "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var theme = ({
  dt
}) => `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${dt("inputtext.color")};
    background: ${dt("inputtext.background")};
    padding-block: ${dt("inputtext.padding.y")};
    padding-inline: ${dt("inputtext.padding.x")};
    border: 1px solid ${dt("inputtext.border.color")};
    transition: background ${dt("inputtext.transition.duration")}, color ${dt("inputtext.transition.duration")}, border-color ${dt("inputtext.transition.duration")}, outline-color ${dt("inputtext.transition.duration")}, box-shadow ${dt("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${dt("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${dt("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${dt("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${dt("inputtext.focus.border.color")};
    box-shadow: ${dt("inputtext.focus.ring.shadow")};
    outline: ${dt("inputtext.focus.ring.width")} ${dt("inputtext.focus.ring.style")} ${dt("inputtext.focus.ring.color")};
    outline-offset: ${dt("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${dt("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${dt("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${dt("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${dt("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${dt("inputtext.disabled.background")};
    color: ${dt("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${dt("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${dt("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${dt("inputtext.sm.font.size")};
    padding-block: ${dt("inputtext.sm.padding.y")};
    padding-inline: ${dt("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${dt("inputtext.lg.font.size")};
    padding-block: ${dt("inputtext.lg.padding.y")};
    padding-inline: ${dt("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`;
var classes = {
  root: ({
    instance,
    props
  }) => ["p-inputtext p-component", {
    "p-filled": instance.filled,
    "p-inputtext-sm": props.size === "small",
    "p-inputtext-lg": props.size === "large",
    "p-invalid": props.invalid,
    "p-variant-filled": props.variant === "filled",
    "p-inputtext-fluid": props.fluid
  }]
};
var InputTextStyle = class _InputTextStyle extends BaseStyle {
  name = "inputtext";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputTextStyle_BaseFactory;
    return function InputTextStyle_Factory(__ngFactoryType__) {
      return (ɵInputTextStyle_BaseFactory || (ɵInputTextStyle_BaseFactory = ɵɵgetInheritedFactory(_InputTextStyle)))(__ngFactoryType__ || _InputTextStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _InputTextStyle,
    factory: _InputTextStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextStyle, [{
    type: Injectable
  }], null, null);
})();
var InputTextClasses;
(function(InputTextClasses2) {
  InputTextClasses2["root"] = "p-inputtext";
})(InputTextClasses || (InputTextClasses = {}));
var InputText = class _InputText extends BaseComponent {
  ngModel;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid;
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  filled;
  _componentStyle = inject(InputTextStyle);
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return isEmpty(this.fluid) ? !!fluidComponent : this.fluid;
  }
  constructor(ngModel) {
    super();
    this.ngModel = ngModel;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput() {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length || this.ngModel && this.ngModel.model;
  }
  static ɵfac = function InputText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputText)(ɵɵdirectiveInject(NgModel, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _InputText,
    selectors: [["", "pInputText", ""]],
    hostAttrs: [1, "p-inputtext", "p-component"],
    hostVars: 14,
    hostBindings: function InputText_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("input", function InputText_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        let tmp_1_0;
        ɵɵclassProp("p-filled", ctx.filled)("p-variant-filled", ((tmp_1_0 = ctx.variant) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ctx.config.inputStyle() || ctx.config.inputVariant()) === "filled")("p-inputtext-fluid", ctx.hasFluid)("p-inputtext-sm", ctx.pSize === "small")("p-inputfield-sm", ctx.pSize === "small")("p-inputtext-lg", ctx.pSize === "large")("p-inputfield-lg", ctx.pSize === "large");
      }
    },
    inputs: {
      variant: "variant",
      fluid: [2, "fluid", "fluid", booleanAttribute],
      pSize: "pSize"
    },
    features: [ɵɵProvidersFeature([InputTextStyle]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputText, [{
    type: Directive,
    args: [{
      selector: "[pInputText]",
      standalone: true,
      host: {
        class: "p-inputtext p-component",
        "[class.p-filled]": "filled",
        "[class.p-variant-filled]": '(variant ?? (config.inputStyle() || config.inputVariant())) === "filled"',
        "[class.p-inputtext-fluid]": "hasFluid",
        "[class.p-inputtext-sm]": 'pSize === "small"',
        "[class.p-inputfield-sm]": 'pSize === "small"',
        "[class.p-inputtext-lg]": 'pSize === "large"',
        "[class.p-inputfield-lg]": 'pSize === "large"'
      },
      providers: [InputTextStyle]
    }]
  }], () => [{
    type: NgModel,
    decorators: [{
      type: Optional
    }]
  }], {
    variant: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pSize: [{
      type: Input,
      args: ["pSize"]
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var InputTextModule = class _InputTextModule {
  static ɵfac = function InputTextModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputTextModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputTextModule,
    imports: [InputText],
    exports: [InputText]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextModule, [{
    type: NgModule,
    args: [{
      imports: [InputText],
      exports: [InputText]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputmask.mjs
var _c0 = ["clearicon"];
var _c1 = ["input"];
function InputMask_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 5);
    ɵɵlistener("click", function InputMask_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-inputmask-clear-icon");
    ɵɵattribute("data-pc-section", "clearIcon");
  }
}
function InputMask_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function InputMask_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, InputMask_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputMask_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 6);
    ɵɵlistener("click", function InputMask_ng_container_2_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵtemplate(1, InputMask_ng_container_2_span_2_1_Template, 1, 0, null, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "clearIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function InputMask_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InputMask_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 3)(2, InputMask_ng_container_2_span_2_Template, 2, 2, "span", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.clearIconTemplate && !ctx_r2._clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
var theme2 = ({
  dt
}) => `
p-inputmask {
    position: relative;
}

.p-inputmask-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    inset-inline-end: ${dt("form.field.padding.x")};
    color: ${dt("form.field.icon.color")};
}

p-inputMask.ng-invalid.ng-dirty > .p-inputtext,
p-input-mask.ng-invalid.ng-dirty > .p-inputtext,
p-inputmask.ng-invalid.ng-dirty > .p-inputtext {
    border-color: ${dt("inputtext.invalid.border.color")};
}

p-inputMask.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
p-input-mask.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
p-inputmask.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
    border-color: ${dt("inputtext.focus.border.color")};
}

p-inputMask.ng-invalid.ng-dirty > .p-inputtext::placeholder,
p-input-mask.ng-invalid.ng-dirty > .p-inputtext::placeholder,
p-inputmask.ng-invalid.ng-dirty > .p-inputtext::placeholder {
    color: ${dt("inputtext.invalid.placeholder.color")};
}
`;
var classes2 = {
  root: ({
    instance
  }) => ({
    "p-inputmask": true,
    "p-filled": instance.variant ? instance.variant === "filled" : instance.config.inputStyle() === "filled"
  })
};
var InputMaskStyle = class _InputMaskStyle extends BaseStyle {
  name = "inputmask";
  theme = theme2;
  classes = classes2;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputMaskStyle_BaseFactory;
    return function InputMaskStyle_Factory(__ngFactoryType__) {
      return (ɵInputMaskStyle_BaseFactory || (ɵInputMaskStyle_BaseFactory = ɵɵgetInheritedFactory(_InputMaskStyle)))(__ngFactoryType__ || _InputMaskStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _InputMaskStyle,
    factory: _InputMaskStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputMaskStyle, [{
    type: Injectable
  }], null, null);
})();
var InputMaskClasses;
(function(InputMaskClasses2) {
  InputMaskClasses2["root"] = "p-inputmask";
})(InputMaskClasses || (InputMaskClasses = {}));
var INPUTMASK_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputMask),
  multi: true
};
var InputMask = class _InputMask extends BaseComponent {
  /**
   * HTML5 input type.
   * @group Props
   */
  type = "text";
  /**
   * Placeholder character in mask, default is underscore.
   * @group Props
   */
  slotChar = "_";
  /**
   * Clears the incomplete value on blur.
   * @group Props
   */
  autoClear = true;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Inline style of the input field.
   * @group Props
   */
  style;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Style class of the input field.
   * @group Props
   */
  styleClass;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Maximum number of character allows in the input field.
   * @group Props
   */
  maxlength;
  /**
   * Specifies tab order of the element.
   * @group Props
   */
  tabindex;
  /**
   * Title text of the input text.
   * @group Props
   */
  title;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to indicate that user input is required on an element before a form can be submitted.
   * @group Props
   */
  ariaRequired;
  /**
   * When present, it specifies that the element value cannot be altered.
   * @group Props
   */
  disabled;
  /**
   * When present, it specifies that an input field is read-only.
   * @group Props
   */
  readonly;
  /**
   * Defines if ngModel sets the raw unmasked value to bound value or the formatted mask value.
   * @group Props
   */
  unmask;
  /**
   * Name of the input field.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * Regex pattern for alpha characters
   * @group Props
   */
  characterPattern = "[A-Za-z]";
  /**
   * When present, the input gets a focus automatically on load.
   * @group Props
   */
  autofocus;
  /**
   * When present, the input gets a focus automatically on load.
   * @group Props
   * @deprecated Use autofocus property instead.
   */
  set autoFocus(value) {
    this.autofocus = value;
    console.log("autoFocus is deprecated. Use autofocus property instead.");
  }
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  autocomplete;
  /**
   * When present, it specifies that whether to clean buffer value from model.
   * @group Props
   */
  keepBuffer = false;
  /**
   * Mask pattern.
   * @group Props
   */
  get mask() {
    return this._mask;
  }
  set mask(val) {
    this._mask = val;
    this.initMask();
    this.writeValue("");
    this.onModelChange(this.value);
  }
  /**
   * Callback to invoke when the mask is completed.
   * @group Emits
   */
  onComplete = new EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke on input.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onInput = new EventEmitter();
  /**
   * Callback to invoke on input key press.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onKeydown = new EventEmitter();
  /**
   * Callback to invoke when input field is cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Template of the clear icon.
   * @group Templates
   */
  clearIconTemplate;
  templates;
  inputViewChild;
  value;
  _mask;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  input;
  filled;
  defs;
  tests;
  partialPosition;
  firstNonMaskPos;
  lastRequiredNonMaskPos;
  len;
  oldVal;
  buffer;
  defaultBuffer;
  focusText;
  caretTimeoutId;
  androidChrome = true;
  focused;
  get inputClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  _componentStyle = inject(InputMaskStyle);
  ngOnInit() {
    super.ngOnInit();
    if (isPlatformBrowser(this.platformId)) {
      let ua = navigator.userAgent;
      this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);
    }
    this.initMask();
  }
  _clearIconTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
      }
    });
  }
  initMask() {
    this.tests = [];
    this.partialPosition = this.mask.length;
    this.len = this.mask.length;
    this.firstNonMaskPos = null;
    this.defs = {
      "9": "[0-9]",
      a: this.characterPattern,
      "*": `${this.characterPattern}|[0-9]`
    };
    let maskTokens = this.mask.split("");
    for (let i = 0; i < maskTokens.length; i++) {
      let c = maskTokens[i];
      if (c == "?") {
        this.len--;
        this.partialPosition = i;
      } else if (this.defs[c]) {
        this.tests.push(new RegExp(this.defs[c]));
        if (this.firstNonMaskPos === null) {
          this.firstNonMaskPos = this.tests.length - 1;
        }
        if (i < this.partialPosition) {
          this.lastRequiredNonMaskPos = this.tests.length - 1;
        }
      } else {
        this.tests.push(null);
      }
    }
    this.buffer = [];
    for (let i = 0; i < maskTokens.length; i++) {
      let c = maskTokens[i];
      if (c != "?") {
        if (this.defs[c]) this.buffer.push(this.getPlaceholder(i));
        else this.buffer.push(c);
      }
    }
    this.defaultBuffer = this.buffer.join("");
  }
  writeValue(value) {
    this.value = value;
    if (this.inputViewChild && this.inputViewChild.nativeElement) {
      if (this.value == void 0 || this.value == null) this.inputViewChild.nativeElement.value = "";
      else this.inputViewChild.nativeElement.value = this.value;
      this.checkVal();
      this.focusText = this.inputViewChild.nativeElement.value;
      this.updateFilledState();
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  caret(first, last) {
    let range, begin, end;
    if (!this.inputViewChild?.nativeElement.offsetParent || this.inputViewChild.nativeElement !== this.inputViewChild.nativeElement.ownerDocument.activeElement) {
      return;
    }
    if (typeof first == "number") {
      begin = first;
      end = typeof last === "number" ? last : begin;
      if (this.inputViewChild.nativeElement.setSelectionRange) {
        this.inputViewChild.nativeElement.setSelectionRange(begin, end);
      } else if (this.inputViewChild.nativeElement["createTextRange"]) {
        range = this.inputViewChild.nativeElement["createTextRange"]();
        range.collapse(true);
        range.moveEnd("character", end);
        range.moveStart("character", begin);
        range.select();
      }
    } else {
      if (this.inputViewChild.nativeElement.setSelectionRange) {
        begin = this.inputViewChild.nativeElement.selectionStart;
        end = this.inputViewChild.nativeElement.selectionEnd;
      } else if (this.document && this.document["selection"].createRange) {
        range = this.document.createRange();
        begin = 0 - range.duplicate().moveStart("character", -1e5);
        end = begin + range.text.length;
      }
      return {
        begin,
        end
      };
    }
  }
  isCompleted() {
    let completed;
    for (let i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
      if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
        return false;
      }
    }
    return true;
  }
  getPlaceholder(i) {
    if (i < this.slotChar.length) {
      return this.slotChar.charAt(i);
    }
    return this.slotChar.charAt(0);
  }
  seekNext(pos) {
    while (++pos < this.len && !this.tests[pos]) ;
    return pos;
  }
  seekPrev(pos) {
    while (--pos >= 0 && !this.tests[pos]) ;
    return pos;
  }
  shiftL(begin, end) {
    let i, j;
    if (begin < 0) {
      return;
    }
    for (i = begin, j = this.seekNext(end); i < this.len; i++) {
      if (this.tests[i]) {
        if (j < this.len && this.tests[i].test(this.buffer[j])) {
          this.buffer[i] = this.buffer[j];
          this.buffer[j] = this.getPlaceholder(j);
        } else {
          break;
        }
        j = this.seekNext(j);
      }
    }
    this.writeBuffer();
    this.caret(Math.max(this.firstNonMaskPos, begin));
  }
  shiftR(pos) {
    let i, c, j, t;
    for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
      if (this.tests[i]) {
        j = this.seekNext(i);
        t = this.buffer[i];
        this.buffer[i] = c;
        if (j < this.len && this.tests[j].test(t)) {
          c = t;
        } else {
          break;
        }
      }
    }
  }
  handleAndroidInput(e) {
    var curVal = this.inputViewChild?.nativeElement.value;
    var pos = this.caret();
    if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
      this.checkVal(true);
      while (pos.begin > 0 && !this.tests[pos.begin - 1]) pos.begin--;
      if (pos.begin === 0) {
        while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin]) pos.begin++;
      }
      setTimeout(() => {
        this.caret(pos.begin, pos.begin);
        this.updateModel(e);
        if (this.isCompleted()) {
          this.onComplete.emit();
        }
      }, 0);
    } else {
      this.checkVal(true);
      while (pos.begin < this.len && !this.tests[pos.begin]) pos.begin++;
      setTimeout(() => {
        this.caret(pos.begin, pos.begin);
        this.updateModel(e);
        if (this.isCompleted()) {
          this.onComplete.emit();
        }
      }, 0);
    }
  }
  onInputBlur(e) {
    this.focused = false;
    this.onModelTouched();
    if (!this.keepBuffer) {
      this.checkVal();
    }
    this.updateFilledState();
    this.onBlur.emit(e);
    if (this.inputViewChild?.nativeElement.value != this.focusText || this.inputViewChild?.nativeElement.value != this.value) {
      this.updateModel(e);
      let event = this.document.createEvent("HTMLEvents");
      event.initEvent("change", true, false);
      this.inputViewChild?.nativeElement.dispatchEvent(event);
    }
  }
  onInputKeydown(e) {
    if (this.readonly) {
      return;
    }
    let k = e.which || e.keyCode, pos, begin, end;
    let iPhone;
    if (isPlatformBrowser(this.platformId)) {
      iPhone = /iphone/i.test(getUserAgent());
    }
    this.oldVal = this.inputViewChild?.nativeElement.value;
    this.onKeydown.emit(e);
    if (k === 8 || k === 46 || iPhone && k === 127) {
      pos = this.caret();
      begin = pos.begin;
      end = pos.end;
      if (end - begin === 0) {
        begin = k !== 46 ? this.seekPrev(begin) : end = this.seekNext(begin - 1);
        end = k === 46 ? this.seekNext(end) : end;
      }
      this.clearBuffer(begin, end);
      if (this.keepBuffer) {
        this.shiftL(begin, end - 2);
      } else {
        this.shiftL(begin, end - 1);
      }
      this.updateModel(e);
      this.onInput.emit(e);
      e.preventDefault();
    } else if (k === 13) {
      this.onInputBlur(e);
      this.updateModel(e);
    } else if (k === 27) {
      this.inputViewChild.nativeElement.value = this.focusText;
      this.caret(0, this.checkVal());
      this.updateModel(e);
      e.preventDefault();
    }
  }
  onKeyPress(e) {
    if (this.readonly) {
      return;
    }
    var k = e.which || e.keyCode, pos = this.caret(), p, c, next, completed;
    if (e.ctrlKey || e.altKey || e.metaKey || k < 32 || k > 34 && k < 41) {
      return;
    } else if (k && k !== 13) {
      if (pos.end - pos.begin !== 0) {
        this.clearBuffer(pos.begin, pos.end);
        this.shiftL(pos.begin, pos.end - 1);
      }
      p = this.seekNext(pos.begin - 1);
      if (p < this.len) {
        c = String.fromCharCode(k);
        if (this.tests[p].test(c)) {
          this.shiftR(p);
          this.buffer[p] = c;
          this.writeBuffer();
          next = this.seekNext(p);
          if (isClient() && /android/i.test(getUserAgent())) {
            let proxy = () => {
              this.caret(next);
            };
            setTimeout(proxy, 0);
          } else {
            this.caret(next);
          }
          if (pos.begin <= this.lastRequiredNonMaskPos) {
            completed = this.isCompleted();
          }
          this.onInput.emit(e);
        }
      }
      e.preventDefault();
    }
    this.updateModel(e);
    this.updateFilledState();
    if (completed) {
      this.onComplete.emit();
    }
  }
  clearBuffer(start, end) {
    if (!this.keepBuffer) {
      let i;
      for (i = start; i < end && i < this.len; i++) {
        if (this.tests[i]) {
          this.buffer[i] = this.getPlaceholder(i);
        }
      }
    }
  }
  writeBuffer() {
    this.inputViewChild.nativeElement.value = this.buffer.join("");
  }
  checkVal(allow) {
    let test = this.inputViewChild?.nativeElement.value, lastMatch = -1, i, c, pos;
    for (i = 0, pos = 0; i < this.len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.getPlaceholder(i);
        while (pos++ < test.length) {
          c = test.charAt(pos - 1);
          if (this.tests[i].test(c)) {
            if (!this.keepBuffer) {
              this.buffer[i] = c;
            }
            lastMatch = i;
            break;
          }
        }
        if (pos > test.length) {
          this.clearBuffer(i + 1, this.len);
          break;
        }
      } else {
        if (this.buffer[i] === test.charAt(pos)) {
          pos++;
        }
        if (i < this.partialPosition) {
          lastMatch = i;
        }
      }
    }
    if (allow) {
      this.writeBuffer();
    } else if (lastMatch + 1 < this.partialPosition) {
      if (this.autoClear || this.buffer.join("") === this.defaultBuffer) {
        if (this.inputViewChild?.nativeElement.value) this.inputViewChild.nativeElement.value = "";
        this.clearBuffer(0, this.len);
      } else {
        this.writeBuffer();
      }
    } else {
      this.writeBuffer();
      this.inputViewChild.nativeElement.value = this.inputViewChild?.nativeElement.value.substring(0, lastMatch + 1);
    }
    return this.partialPosition ? i : this.firstNonMaskPos;
  }
  onInputFocus(event) {
    if (this.readonly) {
      return;
    }
    this.focused = true;
    clearTimeout(this.caretTimeoutId);
    let pos;
    this.focusText = this.inputViewChild?.nativeElement.value;
    pos = this.keepBuffer ? this.inputViewChild?.nativeElement.value.length : this.checkVal();
    this.caretTimeoutId = setTimeout(() => {
      if (this.inputViewChild?.nativeElement !== this.inputViewChild?.nativeElement.ownerDocument.activeElement) {
        return;
      }
      this.writeBuffer();
      if (pos == this.mask?.replace("?", "").length) {
        this.caret(0, pos);
      } else {
        this.caret(pos);
      }
    }, 10);
    this.onFocus.emit(event);
  }
  onInputChange(event) {
    if (this.androidChrome) this.handleAndroidInput(event);
    else this.handleInputChange(event);
    this.onInput.emit(event);
  }
  handleInputChange(event) {
    if (this.readonly) {
      return;
    }
    setTimeout(() => {
      var pos = this.checkVal(true);
      this.caret(pos);
      this.updateModel(event);
      if (this.isCompleted()) {
        this.onComplete.emit();
      }
    }, 0);
  }
  getUnmaskedValue() {
    let unmaskedBuffer = [];
    for (let i = 0; i < this.buffer.length; i++) {
      let c = this.buffer[i];
      if (this.tests[i] && c != this.getPlaceholder(i)) {
        unmaskedBuffer.push(c);
      }
    }
    return unmaskedBuffer.join("");
  }
  updateModel(e) {
    const updatedValue = this.unmask ? this.getUnmaskedValue() : e.target.value;
    if (updatedValue !== null || updatedValue !== void 0) {
      this.value = updatedValue;
      this.onModelChange(this.value);
    }
  }
  updateFilledState() {
    this.filled = this.inputViewChild?.nativeElement && this.inputViewChild.nativeElement.value != "";
    this.cd.markForCheck();
  }
  focus() {
    this.inputViewChild?.nativeElement.focus();
  }
  clear() {
    this.inputViewChild.nativeElement.value = "";
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputMask_BaseFactory;
    return function InputMask_Factory(__ngFactoryType__) {
      return (ɵInputMask_BaseFactory || (ɵInputMask_BaseFactory = ɵɵgetInheritedFactory(_InputMask)))(__ngFactoryType__ || _InputMask);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _InputMask,
    selectors: [["p-inputmask"], ["p-inputMask"], ["p-input-mask"]],
    contentQueries: function InputMask_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function InputMask_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    inputs: {
      type: "type",
      slotChar: "slotChar",
      autoClear: [2, "autoClear", "autoClear", booleanAttribute],
      showClear: [2, "showClear", "showClear", booleanAttribute],
      style: "style",
      inputId: "inputId",
      styleClass: "styleClass",
      placeholder: "placeholder",
      size: "size",
      maxlength: [2, "maxlength", "maxlength", numberAttribute],
      tabindex: "tabindex",
      title: "title",
      variant: "variant",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      ariaRequired: [2, "ariaRequired", "ariaRequired", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      unmask: [2, "unmask", "unmask", booleanAttribute],
      name: "name",
      required: [2, "required", "required", booleanAttribute],
      characterPattern: "characterPattern",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      autoFocus: [2, "autoFocus", "autoFocus", booleanAttribute],
      autocomplete: "autocomplete",
      keepBuffer: [2, "keepBuffer", "keepBuffer", booleanAttribute],
      mask: "mask"
    },
    outputs: {
      onComplete: "onComplete",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onInput: "onInput",
      onKeydown: "onKeydown",
      onClear: "onClear"
    },
    features: [ɵɵProvidersFeature([INPUTMASK_VALUE_ACCESSOR, InputMaskStyle]), ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 24,
    consts: [["input", ""], ["pInputText", "", 3, "focus", "blur", "keydown", "keypress", "input", "paste", "ngClass", "ngStyle", "pSize", "disabled", "readonly", "variant", "pAutoFocus"], [4, "ngIf"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-inputmask-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-inputmask-clear-icon", 3, "click"], [4, "ngTemplateOutlet"]],
    template: function InputMask_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "input", 1, 0);
        ɵɵlistener("focus", function InputMask_Template_input_focus_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputFocus($event));
        })("blur", function InputMask_Template_input_blur_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputBlur($event));
        })("keydown", function InputMask_Template_input_keydown_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputKeydown($event));
        })("keypress", function InputMask_Template_input_keypress_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyPress($event));
        })("input", function InputMask_Template_input_input_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputChange($event));
        })("paste", function InputMask_Template_input_paste_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleInputChange($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(2, InputMask_ng_container_2_Template, 3, 2, "ng-container", 2);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.inputClass)("ngStyle", ctx.style)("pSize", ctx.size)("disabled", ctx.disabled)("readonly", ctx.readonly)("variant", ctx.variant)("pAutoFocus", ctx.autofocus);
        ɵɵattribute("id", ctx.inputId)("type", ctx.type)("name", ctx.name)("placeholder", ctx.placeholder)("title", ctx.title)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("aria-required", ctx.ariaRequired)("required", ctx.required)("data-pc-name", "inputmask")("data-pc-section", "root");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.value != null && ctx.filled && ctx.showClear && !ctx.disabled);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputMask, [{
    type: Component,
    args: [{
      selector: "p-inputmask, p-inputMask, p-input-mask",
      standalone: true,
      imports: [CommonModule, InputText, AutoFocus, TimesIcon, SharedModule],
      template: `
        <input
            #input
            pInputText
            [class]="styleClass"
            [ngClass]="inputClass"
            [attr.id]="inputId"
            [attr.type]="type"
            [attr.name]="name"
            [ngStyle]="style"
            [attr.placeholder]="placeholder"
            [attr.title]="title"
            [pSize]="size"
            [attr.autocomplete]="autocomplete"
            [attr.maxlength]="maxlength"
            [attr.tabindex]="tabindex"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledBy]="ariaLabelledBy"
            [attr.aria-required]="ariaRequired"
            [disabled]="disabled"
            [readonly]="readonly"
            [attr.required]="required"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (keydown)="onInputKeydown($event)"
            (keypress)="onKeyPress($event)"
            [variant]="variant"
            [pAutoFocus]="autofocus"
            (input)="onInputChange($event)"
            (paste)="handleInputChange($event)"
            [attr.data-pc-name]="'inputmask'"
            [attr.data-pc-section]="'root'"
        />
        <ng-container *ngIf="value != null && filled && showClear && !disabled">
            <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" [styleClass]="'p-inputmask-clear-icon'" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" class="p-inputmask-clear-icon" (click)="clear()" [attr.data-pc-section]="'clearIcon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
    `,
      providers: [INPUTMASK_VALUE_ACCESSOR, InputMaskStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    type: [{
      type: Input
    }],
    slotChar: [{
      type: Input
    }],
    autoClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    tabindex: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaRequired: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    unmask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    characterPattern: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autocomplete: [{
      type: Input
    }],
    keepBuffer: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    mask: [{
      type: Input
    }],
    onComplete: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onInput: [{
      type: Output
    }],
    onKeydown: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input", {
        static: true
      }]
    }]
  });
})();
var InputMaskModule = class _InputMaskModule {
  static ɵfac = function InputMaskModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputMaskModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputMaskModule,
    imports: [InputMask, SharedModule],
    exports: [InputMask, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [InputMask, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputMaskModule, [{
    type: NgModule,
    args: [{
      imports: [InputMask, SharedModule],
      exports: [InputMask, SharedModule]
    }]
  }], null, null);
})();
export {
  INPUTMASK_VALUE_ACCESSOR,
  InputMask,
  InputMaskClasses,
  InputMaskModule,
  InputMaskStyle
};
//# sourceMappingURL=primeng_inputmask.js.map
