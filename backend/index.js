const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put('https://api.chatengine.io/users/',
    {username: username, secret:username, first_name:username},
    {headers: {"private-key": "207dd9b2-401f-4f7d-8be0-dc03c927c7b8"
    }}
    )
    return res.status(r.status).json(r.data);
  }catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);