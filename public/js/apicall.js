
const axios = require('axios');
const url = require('url');

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJiMTA2YzhmLWI0YjUtNDk5OC1hZjA3LWMzYzU4MDNlZWY5MyIsImlhdCI6MTcxNDQxODcyNiwic3ViIjoiZGV2ZWxvcGVyL2NiYmIwMjA0LWNlNWUtY2UwMS1kMDAzLTIzNDgzZjFhNzg3MyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiODguMTczLjI5LjI0NSIsIjg5LjgxLjE0MC41NyIsIjg5Ljg0LjIwMS4yMiIsIjc4LjEyNC45MC4zNCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.32zmIlSJICGuAjSBEBd3YATLnaJOuwgkr1_aPwiITsoJCUQC788JM4Kia32dqSoN3zkunlgNPuiDZEBj6pbjiQ';

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