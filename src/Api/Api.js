import axios from "axios";

export async function fetchFilms() {
    const { data } = await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQ4ZmU0ZDIzNGE0MjdlMmY2MGI3NDg2YjZhYTRhZSIsIm5iZiI6MTcyODkwMzg4OC42MjA5Mywic3ViIjoiNjcwY2Y3MjdkNWY5M2EzZGEwYmJhZGM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kJBRTU68QmBpz60EREKga2jrtaQJpZP_MaSvkLAtp7M'
    }})
    return data.results
}

export async function fetchFilmDetails(movieID) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQ4ZmU0ZDIzNGE0MjdlMmY2MGI3NDg2YjZhYTRhZSIsIm5iZiI6MTcyODkwMzg4OC42MjA5Mywic3ViIjoiNjcwY2Y3MjdkNWY5M2EzZGEwYmJhZGM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kJBRTU68QmBpz60EREKga2jrtaQJpZP_MaSvkLAtp7M`
        }
    });
    return data; 
}

export async function fetchFilmActors(movieID) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQ4ZmU0ZDIzNGE0MjdlMmY2MGI3NDg2YjZhYTRhZSIsIm5iZiI6MTcyODkwMzg4OC42MjA5Mywic3ViIjoiNjcwY2Y3MjdkNWY5M2EzZGEwYmJhZGM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kJBRTU68QmBpz60EREKga2jrtaQJpZP_MaSvkLAtp7M`
        }
    });
    return data; 
}

export async function fetchFilmReviews(movieID) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/reviews?language=en-US&page=1`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQ4ZmU0ZDIzNGE0MjdlMmY2MGI3NDg2YjZhYTRhZSIsIm5iZiI6MTcyODkwMzg4OC42MjA5Mywic3ViIjoiNjcwY2Y3MjdkNWY5M2EzZGEwYmJhZGM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kJBRTU68QmBpz60EREKga2jrtaQJpZP_MaSvkLAtp7M`
        }
    });
    return data; 
}

export async function fetchFilmsByQuery(query) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQ4ZmU0ZDIzNGE0MjdlMmY2MGI3NDg2YjZhYTRhZSIsIm5iZiI6MTcyODkwMzg4OC42MjA5Mywic3ViIjoiNjcwY2Y3MjdkNWY5M2EzZGEwYmJhZGM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kJBRTU68QmBpz60EREKga2jrtaQJpZP_MaSvkLAtp7M'
    }})
    return data.results
}