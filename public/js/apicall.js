
const axios = require('axios');
const url = require('url');

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY5NmQxMmQ5LWI5YjEtNGMzZS1hOWUyLWU0Mjg2M2E1MGMzYSIsImlhdCI6MTY5ODE1OTE2NCwic3ViIjoiZGV2ZWxvcGVyL2NiYmIwMjA0LWNlNWUtY2UwMS1kMDAzLTIzNDgzZjFhNzg3MyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiODguMTczLjI5LjI0NSIsIjg5LjgxLjE0MC41NyIsIjg5Ljg0LjIwMS4yMiIsIjU0LjE3My4yMjkuMjAwIiwiNTQuMTc1LjIzMC4yNTIiXSwidHlwZSI6ImNsaWVudCJ9XX0.7MDtvwaRT5GNdyQzM8VMR2g2iln68e8OnbGXRAmcnznd-RGXHFd_MK3WzBylGsp05dw11Yrkq2Kx5GewOOFg3Q';

async function fetchDataFromBrawlStarsLocal(playerTag) {

    try {
        const response = await fetch(`https://api.brawlstars.com/v1/players/%23${playerTag}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                Accept: 'application/json'
            }
        });
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function fetchDataFromBattleLog(playerTag) {

    try {
        const response = await fetch(`https://api.brawlstars.com/v1/players/%23${playerTag}/battlelog`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                Accept: 'application/json'
            }
        });
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { fetchDataFromBrawlStarsLocal, fetchDataFromBattleLog };