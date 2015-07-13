/*globals document, window, jQuery */

(function ($) {

  "use strict";

  var canvas;
  var settings;
  var size;

  // http://stackoverflow.com/questions/610406/
  if (!String.prototype.format) {
    String.prototype.format = function () {
      var args = arguments;
      return this.replace(/\{(\d+)\}/g, function (match, number) {
        return args[number] !== undefined ? args[number] : match;
      });
    };
  }

  var initCanvas = function () {
    var attrs = 'width="{0}" height="{1}"'.format(size.width, size.height);
    var element = $('<canvas {0}></canvas>'.format(attrs))
      .css({position: "absolute", top: "0", left: "-9999px"});
    canvas = element[0];
    $("body").append(canvas);
  };

  var initTarget = function (target) {
    var button;
    var css;
    var overlay;

    var generateOverlayStyles = function () {
      var offset = $(target).offset();
      return {
        width: size.width + "px",
        height: size.height + "px",
        left: offset.left + "px",
        top: offset.top + "px"
      };
    };

    css = $.extend(
      {
        "background-image": "url({0})".format(canvas.toDataURL("image/png")),
        "pointer-events": "none",
        "position": "absolute",
        "z-index": settings.zIndex
      },
      generateOverlayStyles()
    );

    overlay = $("<div></div>")
      .width($(document).width())
      .height($(document).height())
      .css(css)
      .hide();
    $(target).append(overlay);

    button = $('<button type="button">toggle rhytm grid</button>')
      .css({
        "font-family": "sans-serif",
        "font-weight": "bold",
        "background-color": settings.lineColor,
        "color": settings.textColor,
        "border": "none",
        "padding": "0.5em",
        "position": "fixed",
        "bottom": "10px",
        "left": "10px",
        "z-index": settings.zIndex
      })
      .click(function () {
        $(overlay).toggle();
      });
    $(target).append(button);
  };

  var paintCanvas = function () {
    var context = canvas.getContext("2d");
    var yPosCurrent = 0;
    var yPosReal = 0;
    context.strokeStyle = settings.lineColor;
    context.lineWidth = 0.5;
    while (yPosReal <= size.height) {
      yPosCurrent = Math.floor(yPosReal) + 0.5;  // because lines on canvas
                                                 // are drawn in 0.5 intervals
      context.moveTo(0, yPosCurrent);
      context.lineTo(size.width, yPosCurrent);
      context.stroke();
      yPosReal += settings.gridSize;
    }
  };

  $.fn.baselineOverlay = function (options) {
    settings = $.extend({
      gridSize: 20, // assuming default font-size: 16px and line-height: 1.2
      lineColor: "#db186f",
      textColor: "#fff",
      zIndex: 99999
    }, options);

    size = {width: $(this).width(), height: $(this).height()};

    initCanvas();
    paintCanvas();
    initTarget(this);

    return this;
  };

}(jQuery));