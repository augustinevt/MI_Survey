import request from 'superagent';
import clone from 'clone';
import Promise from 'bluebird';
import { browserHistory } from 'react-router';

const api = {};

const responseHandler = (reject, resolve, err, res) => {
  return resolve(res.body);
};

api.default = {
  post(data) {
    return new Promise((resolve, reject) => {
      request
        .post('/survey-data')
        .send(data)
        .end((err, res) => {
          responseHandler(reject, resolve, err, res);
        });
    });
  },
  get(email) {
    return new Promise((resolve, reject) => {
      request
        .get(`/checkEmail/${email}`)
        .end((err, res) => {
          responseHandler(reject, resolve, err, res);
        });
    });
  },
};

export default api;
