import axios from 'axios';
import {AuthKey} from '../keys/AuthKey'

// to avoid params overriding 
export const baseParams = {
    part: "snippet",
    maxResults: 10,
    key: AuthKey
  };
  
export const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });