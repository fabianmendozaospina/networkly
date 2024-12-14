'use strict';

export function select(selector, scope = document) {
    return scope.querySelector(selector);
}

export function selectById(selector, scope = document) {
    return scope.getElementById(selector);
}

export function selectAll(selector, scope = document) {
    return [...scope.querySelectorAll(selector)];
}

export function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

export function create(element) {
    return document.createElement(element);
  }
  

