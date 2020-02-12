import request from '../utils/request';

export function apiLogin(user, pass) {
  // return request({
  //   method: 'post',
  //   url: 'loginCombine',
  //   data: {
  //     username: user,
  //     password: pass,
  //   },
  // });
  const formData = new FormData();
  formData.append('username', user);
  formData.append('password', pass);
  return new Promise((resolve, reject) => {
    request({
      method: 'post',
      url: 'loginCombine',
      data: formData,
    })
      .then(response => {
        console.log('berhasill');
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log('error kuyy');
        console.log(error);
        reject(error);
      });
  });
}
