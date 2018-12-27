/*******************************************************************************
    Measure=it - A browser extension to measure parts of page.
    Copyright (C) 2017-2019 Trishul Goel

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/tsl143/measure-it
*******************************************************************************/

const isFirefox = typeof browser != 'undefined' ? true : false;
const localStore = {
  get: key => {
    if (isFirefox) {
      return browser.storage.local.get();
    } else {
      return new Promise(resolve => chrome.storage.local.get([key], resolve))
    }
  },
  set: obj => {
    if (isFirefox) {
      return browser.storage.local.set(obj);
    } else {
      return new Promise(resolve => chrome.storage.local.set(obj, resolve))
    }
  }
}