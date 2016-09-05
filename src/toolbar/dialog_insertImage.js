(function(wysihtml5) {
  wysihtml5.toolbar.Dialog_insertImage = wysihtml5.toolbar.Dialog.extend({
    _interpolate: function(avoidHiddenFields) {
      this.base(avoidHiddenFields);
      var imgView = this.container.querySelector('.qq-container IMG');
      if (null !== imgView) {
        var newValue  = (this.elementToChange && typeof(this.elementToChange) !== 'boolean') ? (this.elementToChange.getAttribute("SRC") || "") : '';
        imgView.setAttribute("SRC", newValue);
      }
    }
  });
})(wysihtml5);
