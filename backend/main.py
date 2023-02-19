from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import *

app = FastAPI()
db = dict()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db["users"] = dict()
db["nonprofits"] = [
    {
        "name": "Khan Academy",
        "uuid": "khanacademy",
        "website": "https://khanacademy.org",
        "image": "https://kagi.com/proxy/Khan_Academy_Logo.png",
        "description": "Khan Academy is an American non-profit educational organization created in 2008 by Sal Khan. Its goal is creating a set of online tools that help educate students. The organization produces short lessons in the form of videos. Its website also includes supplementary practice exercises and materials for educators.",
        "tags": ["Education", "EdTech", "Science", "Mathematics"],
    },
    {
        "name": "Chan Zuckerberg Initiative",
        "uuid": "czi",
        "website": "https://chanzuckerberg.com",
        "image": "https://kagi.com/proxy/310px-Chan_Zuckerberg_Initiative.svg.png",
        "description": 'The Chan Zuckerberg Initiative (CZI) is an organization established and owned by Facebook founder Mark Zuckerberg and his wife Priscilla Chan with an investment of 99 percent of the couple\'s wealth from their Facebook shares over their lifetime. The CZI is set up as a limited liability company (LLC) and is an example of philanthrocapitalism. CZI has been deemed likely to be "one of the most well-funded philanthropies in human history".',
        "tags": [
            "Science",
            "Education",
            "Immigration Reform",
            "Housing",
            "Criminal Justice",
            "Research",
            "Scientific Research",
            "Energy",
            "Energy Research",
        ],
    },
    {
        "name": "Wikipedia",
        "uuid": "wikipedia",
        "website": "https://en.wikipedia.org",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png",
        "description": "Wikipedia is a multilingual free online encyclopedia written and maintained by a community of volunteers, known as Wikipedians, through open collaboration and using a wiki-based editing system. Wikipedia is the largest and most-read reference work in history.",
        "tags": ["Education", "Knowledge", "Open Source", "Freedom"],
    },
    {
        "name": "Goodwill",
        "uuid": "goodwill",
        "website": "https://goodwill.org",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goodwill_Industries_Logo.svg/200px-Goodwill_Industries_Logo.svg.png",
        "description": "Goodwill Industries International Inc., often shortened in speech and writing to Goodwill (stylized as goodwill), is an American nonprofit 501(c)(3) organization that provides job training, employment placement services, and other community-based programs for people who have barriers to their employment.",
        "tags": ["Clothing", "Veterans", "Employment"],
    },
    {
        "name": "The Salvation Army",
        "uuid": "salvationarmy",
        "website": "salvationarmy.org",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/The_Salvation_Army.svg/200px-The_Salvation_Army.svg.png",
        "description": 'The Salvation Army (TSA) is a Protestant church and an international charitable organization headquartered in London, England. The organisation reports a worldwide membership of over 1.7 million, comprising soldiers, officers and adherents collectively known as Salvationists. Its founders sought to bring salvation to the poor, destitute, and hungry by meeting both their "physical and spiritual needs"',
        "tags": ["Education", "Poverty"],
    },
    {
    "name": "United Nations Children's Fund (UNICEF)",
    "uuid": "unicef",
    "website": "https://www.unicef.org",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/UNICEF_Logo.svg/150px-UNICEF_Logo.svg.png",
    "description": "UNICEF works in over 190 countries and territories to save children's lives, to defend their rights, and to help them fulfill their potential, from early childhood through adolescence. UNICEF is funded entirely by the voluntary contributions of individuals, businesses, foundations, and governments.",
    "tags": ["Children", "Health", "Education", "Humanitarian"]
},
{
    "name": "Doctors Without Borders (Médecins Sans Frontières)",
    "uuid": "msf",
    "website": "https://www.msf.org",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MSF-USA.svg/150px-MSF-USA.svg.png",
    "description": "Médecins Sans Frontières (MSF) is an international, independent, medical humanitarian organization that delivers emergency aid to people affected by armed conflict, epidemics, natural disasters, and exclusion from healthcare. MSF provides assistance to people based on need, irrespective of race, religion, gender, or political affiliation.",
    "tags": ["Medical", "Humanitarian", "Disaster Relief", "Global Health"]
},
{
    "name": "World Wildlife Fund (WWF)",
    "uuid": "wwf",
    "website": "https://www.worldwildlife.org",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/WWF_logo.svg/150px-WWF_logo.svg.png",
    "description": "The World Wildlife Fund (WWF) is an international non-governmental organization that works to conserve nature and reduce the most pressing threats to the diversity of life on Earth. WWF works in over 100 countries and is supported by more than 5 million members globally.",
    "tags": ["Conservation", "Environment", "Wildlife", "Sustainability"]
},
{
    "name": "The Nature Conservancy",
    "uuid": "tnc",
    "website": "https://www.nature.org",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nature_Conservancy_Logo.svg/200px-Nature_Conservancy_Logo.svg.png",
    "description": "The Nature Conservancy is a global environmental nonprofit organization that works to protect the lands and waters on which all life depends. The organization has over 1 million members and operates in over 70 countries.",
    "tags": ["Conservation", "Environment", "Sustainability"]
},
{
    "name": "Amnesty International",
    "uuid": "amnesty",
    "website": "https://www.amnesty.org",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Amnesty_International.svg/200px-Amnesty_International.svg.png",
    "description": "Amnesty International is a global movement of more than 10 million people who take injustice personally. The organization campaigns to end abuses of human rights and to ensure justice for those whose rights have been violated.",
    "tags": ["Human Rights", "Social Justice", "International"]
},
{
    "name": "Feeding America",
    "uuid": "feedingamerica",
    "website": "https://www.feedingamerica.org",
    "image": "https://www.feedingamerica.org/themes/custom/feedingamerica/assets/images/FA-Logo-Color.png",
    "description": "Feeding America is a United States-based nonprofit organization with a nationwide network of food banks feeding the hungry. It is the third largest U.S. charity and serves millions of Americans facing hunger every year.",
    "tags": ["Hunger", "Food Banks", "Charity"]
},
{
    "name": "UNICEF",
    "uuid": "unicef",
    "website": "https://www.unicef.org",
    "image": "https://www.unicef.org/themes/custom/unicef/logo.png",
    "description": "UNICEF (United Nations Children's Fund) is a United Nations program that provides humanitarian and developmental assistance to children and mothers in developing countries. It is the largest humanitarian organization focused on children.",
    "tags": ["Children", "International", "Humanitarian"]
},
{
    "name": "National Audubon Society",
    "uuid": "audubonsociety",
    "website": "https://www.audubon.org",
    "image": "https://www.audubon.org/sites/default/files/nas_logo_stacked_pms8003.jpg",
    "description": "The National Audubon Society is an American non-profit environmental organization dedicated to the conservation of birds and their habitats. It is named in honor of John James Audubon, a Franco-American ornithologist and naturalist.",
    "tags": ["Conservation", "Birds", "Environment"]
},
{
    "name": "Make-A-Wish Foundation",
    "uuid": "makeawishfoundation",
    "website": "https://www.wish.org",
    "image": "https://www.wish.org/themes/custom/wish/logo.svg",
    "description": "The Make-A-Wish Foundation is an American non-profit organization that arranges experiences described as \"wishes\" to children with life-threatening medical conditions. The organization was founded in the United States in 1980.",
    "tags": ["Wishes", "Children", "Medical"]
},
]


@app.get("/")
def read_root():
    return {"data": "Hello world"}


@app.get("/nonprofit/all")
def get_nonprofits():
    return {"nonprofits": db["nonprofits"]}


@app.post("/user/signup", status_code=200)
async def user_signup(info: Request):
    info = await info.json()
    required_keys = ["firstName", "lastName", "email", "password"]
    for rqk in required_keys:
        if rqk not in info:
            raise HTTPException(status_code=400, detail=f"Missing key {rqk}")
    first_name = info["firstName"]
    last_name = info["lastName"]
    email = info["email"]
    password = info["password"]

    if email in db["users"]:
        raise HTTPException(status_code=400, detail=f"Email {email} already registered")

    db["users"][email] = {
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password,
    }

    return {"email": email}


@app.post("/user/login", status_code=200)
async def user_login(info: Request):
    info = await info.json()
    required_keys = ["email", "password"]
    for rqk in required_keys:
        if rqk not in info:
            print("Missing key")
            raise HTTPException(status_code=400, detail=f"Missing key {rqk}")

    email = info["email"]
    password = info["password"]

    if email not in db["users"]:
        raise HTTPException(status_code=400, detail="Incorrect login!")

    if db["users"][email]["password"] != password:
        raise HTTPException(status_code=400, detail="Incorrect login!")

    return {"email", email}

@app.get("/user/get/{email}", status_code=200)
async def get_user(email):
    if email not in db["users"]:
        raise HTTPException(status_code=400, detail="Nonexistent user")

    return db["users"][email]
