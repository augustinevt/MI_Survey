import request from 'superagent';
import clone from 'clone';
import Promise from 'bluebird';
import { browserHistory } from 'react-router';

const api = {};

const responseHandler = (reject, resolve, err, res) => {
  console.log('RH res', res)
  return resolve(res.body);
};

api.default = {
  post(data) {
    return new Promise((resolve, reject) => {
      request
        .post('http://localhost:8080/survey')
        .send(data)
        .end((err, res) => {
          console.log('api res', res);
          responseHandler(reject, resolve, err, res);
        });
    });
  },
};

export default api;
