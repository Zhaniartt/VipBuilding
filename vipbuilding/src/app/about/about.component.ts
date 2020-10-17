import { Component, OnInit } from '@angular/core';
import 'jquery'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const $PANE = $("#triple-pane");
const $CONTENT = $("#triple-pane .pane-content");
const $TITLE = $("#triple-pane .pane-title");
const $TEXT = $("#triple-pane .pane-text");
const $BTN = $("#triple-pane .pane-btn");

// Pick the sizes that look best at max width of the element
const maxTitleSize = 36;
const maxTextSize = 20;
const maxBtnSize = 24;
const maxPadding = 20;

const resize = _ => {
	const W = $PANE.width() / 1400;

	$TITLE.css("font-size", maxTitleSize * W);
	$TEXT.css("font-size", maxTextSize * W);
	$BTN.css("font-size", maxBtnSize * W);
	$CONTENT.css("padding", maxPadding * W);
};

$(window).resize(resize);
$(document).ready(resize);

  }
}
