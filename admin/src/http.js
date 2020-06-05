import axios from 'axios';
 export const http=axios.create({
  baseURL:"http://localhost:3000/admin/api"
});//创建一个axios的实例
