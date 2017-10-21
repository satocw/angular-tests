import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomAsSyntax]'
})
export class CustomAsSyntaxDirective {
  private _context = new CustomAsSyntaxContext();

  @Input() set appCustomAsSyntax(condition) {
    this._context.$implicit = this._context.appCustomAsSyntax = condition;
    this._updateView();
  }

  constructor(
    private templateRef: TemplateRef<CustomAsSyntaxContext>,
    private _viewContainer: ViewContainerRef
  ) { }

  private _updateView() {
    if (this._context.$implicit) {
      this._viewContainer.clear();
      this._viewContainer.createEmbeddedView(this.templateRef, this._context);
    }
  }

}

export class CustomAsSyntaxContext {
  public $implicit: any = null;
  public appCustomAsSyntax: any = null;
}
