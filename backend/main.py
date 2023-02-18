from fastapi import FastAPI, Request
from typing import *

app = FastAPI()
db = dict()

db["nonprofits"] = [
    {
        "name": "Khan Academy",
        "uuid": "khanacademy",
        "website": "https://khanacademy.org",
        "image": "https://kagi.com/proxy/Khan_Academy_Logo.png",
        "description": "Khan Academy is an American non-profit educational organization created in 2008 by Sal Khan. Its goal is creating a set of online tools that help educate students. The organization produces short lessons in the form of videos. Its website also includes supplementary practice exercises and materials for educators.",
        "tags": ["Education", "EdTech", "Science", "Mathematics"]
    },
    {
        "name": "Chan Zuckerberg Initiative",
        "uuid": "czi",
        "website": "https://chanzuckerberg.com",
        "image": "https://kagi.com/proxy/310px-Chan_Zuckerberg_Initiative.svg.png",
        "description": "The Chan Zuckerberg Initiative (CZI) is an organization established and owned by Facebook founder Mark Zuckerberg and his wife Priscilla Chan with an investment of 99 percent of the couple's wealth from their Facebook shares over their lifetime. The CZI is set up as a limited liability company (LLC) and is an example of philanthrocapitalism. CZI has been deemed likely to be \"one of the most well-funded philanthropies in human history\".",
        "tags": ["Science", "Education", "Immigration Reform", "Housing", "Criminal Justice", "Research", "Scientific Research", "Energy", "Energy Research"]
    },
    {
        "name": "Wikipedia",
        "uuid": "wikipedia",
        "website": "https://en.wikipedia.org",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png",
        "description": "Wikipedia is a multilingual free online encyclopedia written and maintained by a community of volunteers, known as Wikipedians, through open collaboration and using a wiki-based editing system. Wikipedia is the largest and most-read reference work in history.",
        "tags": ["Education", "Knowledge", "Open Source", "Freedom"]
    },
    {
        "name": "Goodwill",
        "uuid": "goodwill",
        "website": "https://goodwill.org",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goodwill_Industries_Logo.svg/200px-Goodwill_Industries_Logo.svg.png",
        "description": "Goodwill Industries International Inc., often shortened in speech and writing to Goodwill (stylized as goodwill), is an American nonprofit 501(c)(3) organization that provides job training, employment placement services, and other community-based programs for people who have barriers to their employment.",
        "tags": ["Clothing", "Veterans", "Employment"]
    },
    {
        "name": "The Salvation Army",
        "uuid": "salvationarmy",
        "website": "salvationarmy.org",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/The_Salvation_Army.svg/200px-The_Salvation_Army.svg.png",
        "description": "The Salvation Army (TSA) is a Protestant church and an international charitable organization headquartered in London, England. The organisation reports a worldwide membership of over 1.7 million, comprising soldiers, officers and adherents collectively known as Salvationists. Its founders sought to bring salvation to the poor, destitute, and hungry by meeting both their \"physical and spiritual needs\"",
        "tags": ["Education", "Poverty"]
    },
]

@app.get("/")
def read_root():
    return {"data": "Hello world"}


@app.get("/nonprofit/all")
def get_nonprofits():
    return {
        "nonprofits": db["nonprofits"]
    }
