import dotenv from 'dotenv'
dotenv.config()
import * as fetcher from './lib/Fetcher.mjs'
import {createKoreFile, createGitHubAdaptor} from "korefile";


async function init() {
    let username = process.env.username
    let gh_token = process.env.gh_token
    let readme_path = process.env.readme_path
    let branch = process.env.branch
    let data = await fetcher.fetchAnime(username)
    let currentreadme = await fetcher.getreadme(readme_path, gh_token, branch)
    let completednewreadme = await fetcher.appendAnimeCompleted(currentreadme, data.completed)
    let watchingnewreadme = await fetcher.appendAnimeWatching(completednewreadme, data.watching)
    let ptwnewreadme = await fetcher.appendAnimeCompleted(watchingnewreadme, data.ptw)
    console.log(completednewreadme)
}
init()
    /*
    const fetchAnimeList = async (status) => {
        const url = `https://myanimelist.net/animelist/${username}/load.json?status=${status}`;
        const response = await fetch(url).catch(err => {throw new Error(err)})
        const animeList = await response.json();
        return animeList
      };
      const anime_watching = await fetchAnimeList('1')
      for(let i = 0; i < anime_watching.length; i++) {
        
      }
      */