/**
 * Created by reddy on 2017/4/18.
 */
import axios from 'axios';


export default class Ajax {
  static async fetchUsername() {
    const reqOpt = {
      url: 'https://www.moudicat.com/api/biliran.php',
      params: {
        action: 'sbyusername'
      }
    };
    let res = await axios.request(reqOpt);
    if (res.status !== 200) {
        throw res.data;
    }
    return res.data;
  }

}