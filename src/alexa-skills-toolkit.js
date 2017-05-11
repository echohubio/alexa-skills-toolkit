import request from 'superagent';
import * as chrome from 'chrome-cookies-secure-promise';

import Debug from 'debug';

const debug = Debug('alexa-skills-toolkit');

export class LoginError extends Error {
  constructor(message) {
    super(message);

    this.name = 'LoginError';
    Error.captureStackTrace(this, 'LoginError');
  }
}

export const updateCode = async (appId, data, locale = 'en_US') => {
  debug('updating skill code');

  if (!appId) {
    throw new Error('updateSkillCode requires an appId');
  }

  if (!data) {
    throw new Error('updateSkillCode requires data');
  }

  const url = `https://developer.amazon.com/alexacreator/api/skill/${appId}/locale/${locale}/save`;
  const cookies = await chrome.getCookies(url, 'header');
  const csrf = cookies.match(/session-id=([^;]*);/)[1];

  return request
    .post(url)
    .send(data)
    .set('Cookie', cookies)
    .set('X-AMZ-CSRF', csrf)
    .then(() => true);
};

export const getCode = async (appId, locale = 'en_US') => {
  debug('updating skill code');

  if (!appId) {
    throw new Error('updateSkillCode requires an appId');
  }

  const url = `https://developer.amazon.com/alexacreator/api/skill/${appId}/stage/development/locale/${locale}/model`;
  const cookies = await chrome.getCookies(url, 'header');

  return request
    .get(url)
    .redirects(0)
    .set('Accept', 'application/json')
    .set('Cookie', cookies)
    .then(res => res.text)
    .catch((err) => {
      if (err.status === 302 && err.response.header.location.match(/login/)) {
        throw new LoginError();
      } else {
        throw err;
      }
    });
};
