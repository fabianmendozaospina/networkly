'use strict';

import { select, listen } from "./utils.js";

const dropdownBtn = select('.dropdown-btn');
const dropdownContent = select('.dropdown-content');

listen('click', dropdownBtn, () => {
    dropdownContent.classList.toggle('show');
});