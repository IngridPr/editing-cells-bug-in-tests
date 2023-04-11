/*
 * Copyright 2022 Nokia Networks Oy
 */
/* eslint-disable no-undef */
import { TextDecoder, TextEncoder } from "util";
import "jest-canvas-mock";
import "jest-localstorage-mock";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {
        // do nothing
      },
      removeListener: function () {
        // do nothing
      },
    };
  };
