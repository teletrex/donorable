//Organization Data

const data =  [
  {
    id: '40454230',
    description: 'Community Tech Hub',
    name: 'Hacker Dojo',
    about: 'The Hacker Dojo is a community of engineers, artists, scientists, activists, entrepreneurs and other creative people centered around a co-working and social facility. Feel free to drop by and see for yourself what the Dojo is all about.',
    image:
      'https://uploads-ssl.webflow.com/62db364a3371ce4590628770/62db37e93371ceb0d4629f8d_hackerdojo-logo.jpeg',
    carousel: [
      'https://uploads-ssl.webflow.com/62db364a3371ce4590628770/6357372f0b897b21c454956d_learn-card-image-p-500.webp',
      'https://uploads-ssl.webflow.com/62db364a3371ce4590628770/6357372fef624f6d8a55fb93_play-card-image-p-500.webp',
      'https://uploads-ssl.webflow.com/62db364a3371ce4590628770/6357372f30fe818b90865741_build-card-image-p-500.webp'
    ],
    latlon: [37.3963152, -122.049020],
    ntee: ["B"],
  },
  {
    id: '40454130',
    description: 'Talks & Worskhops include infosec/hacking topics',
    name: "Pacific Hacker's Association",
    about: 'We believe that by sharing knowledge and providing mentorship, we can help individuals advance their careers and contribute to a safer internet and industry, where individual values, digital rights, and proper use of technology prevail.',
    image:
    'https://static.wixstatic.com/media/6c0d0a_11d8be0b4d914185a0f7090ec0a4917b~mv2.png/v1/fill/w_1200,h_392,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6c0d0a_11d8be0b4d914185a0f7090ec0a4917b~mv2.png',
    carousel: [
      'https://static.wixstatic.com/media/6c0d0a_e76555d1c72f482bb94854071b17684d~mv2.jpeg/v1/fill/w_720,h_540,al_c,lg_1,q_85,enc_auto/6c0d0a_e76555d1c72f482bb94854071b17684d~mv2.jpeg',
      'https://static.wixstatic.com/media/6c0d0a_218ffb4a10c1465493b7c90089dc13f6~mv2.jpeg/v1/fill/w_719,h_540,al_c,lg_1,q_85,enc_auto/6c0d0a_218ffb4a10c1465493b7c90089dc13f6~mv2.jpeg'

    ],
    latlon: [37.3963152, -122.049020],
    ntee: ["C"],
  },

  {
    id: '99305926',
    description: 'Domestic Violence Support and Prevention',
    name: 'La Casa de las Madres',
    about: '...',
    latlon:[37.77976550281608, -122.41317985497938],
    image:
      'https://cdn.greatnonprofits.org/images/logos/Redlogo.jpg',
    ntee:["P","I","F"],
  },
  {
    id: '99305927',
    description: 'Bay Area Tutoring',
    name: 'Aspire',
    about: '...',
    latlon:[37.79686549849196, -122.27536299824509],
    ntee:["I","P"],
    image:
      'https://res.cloudinary.com/dktp1ybbx/image/upload/f_auto,fl_lossy,q_auto/v1554482830/organization/prod/78637/9ECisDNEkn.png'
  },
  {
    id: '121100782',
    description: 'Buddhist Tradition for Modern Life',
    name: 'Juniper',
    about: 'A meditation school in which the wisdom and experience of a long-standing meditation tradition are presented in a secular form, tailored to modern culture, knowledge and sensibility.',
    image: 'http://www.juniperpath.org/static/img/juniper_live/story/juniper_plant.jpg',
    carousel: [
      'http://www.juniperpath.org/static/img/juniper_live/home/people_bg.jpg',
      'http://www.juniperpath.org/static/img/juniper_live/home/story_bg.jpg',
      'http://www.juniperpath.org/static/img/juniper_live/home/why_meditate_bg.jpg'
    ]
  },
  {
    id: '99305928',
    description: 'For Families Free of Violence',
    name: 'STAND!',
    latlon:[37.97150640604684, -122.04656424016211],
    ntee:["P","I","F"],
    about: 'STAND! For Families Free of Violence is a catalyst for breaking the multi-generational cycle of violence, promoting safe and strong relationships, and rebuilding lives.',
    image:
      'https://www.standffov.org/wp-content/uploads/2020/07/STANDlogo_allblueberry-01.png'
  },
  {
    id: '99305929',
    description: 'Filipino Community Center',
    name: 'Bayanihan',
    ntee: ["A"],
    latlon: [37.77976550281608, -122.40768669095041],
    about: 'The Filipino-American Development Foundation (FADF) is a nonprofit organization founded in 1997  to develop initiatives and resources to strengthen the social, physical, and economic well being of the Filipino-American community in San Francisco.',
    image:
      'https://www.bayanihancc.org/uploads/1/0/8/6/108621871/published/1396417967.png?1499277227'
  }
]
/*
  { "id" : "7578046",
    "description" :"Get you the information to do good",
    "name": "Candid",
    "about": "See profile Link",
    "image" : "https://www.guidestar.org/App_Themes/MainSite2/images/ProfilePageSvgs/profile-PLATINUM2021-seal.svg",
    "organization": {
      "organization_id": "7578046",
      "ein": "39-1731296",
      "organization_name": "Candid",
      "also_known_as": "Foundation Center, Guidestar",
      "mission": "Get you the information to do good",
      "website_url": "candid.org",
      "logo_url": "candid.org",
      "profile_level": "Platinum",
      "profile_year": 2020,
      "profile_link": "https://www.guidestar.org/profile/82-4267025",
      "profile_logo": "https://www.guidestar.org/App_Themes/MainSite2/images/ProfilePageSvgs/profile-PLATINUM2021-seal.svg",
      "leader_name": "Ann Mei Chang",
      "leader_title": "CEO",
      "contact_name": "John smith",
      "contact_email": "help@orgnam.org",
      "contact_phone": "(555) 111-5555",
      "contact_title": "Support lead",
      "number_of_employees": 55,
      "ruling_year": 2019
    },
    "campaigns" : [],
    "properties": {
      "bmf_status": false,
      "pub78_verified": false,
      "allow_online_giving": true,
      "dei_submitted": false,
      "revoked": false,
      "defuncted_or_merged": false,
      "relationship_type": {
        "parent": true,
        "subordinate": false,
        "independent": false,
        "headquarters": true
      },
      "relationship_details": {
        "relationship_type": "parent",
        "organization_name": "Candid 2",
        "ein": "12-4566789"
      }
    },
    "geography": {
      "address_line_1": "1 Financial Sq",
      "address_line_2": "Floor 24",
      "city": "New York",
      "state": "NY",
      "zip": 10005,
      "msa": "IL - Peoria-Pekin",
      "county": "Peoria, IL",
      "latitude": 40.9052,
      "longitude": -89.5866
    },
    "taxonomies": {
      "subject_codes": [
        {
          "subject_code": "SP030000",
          "subject_code_description": "SP030000"
        }
      ],
      "population_served_codes": [
        {
          "population_served_code": "PG030000",
          "population_served_description": "People with Physical Disabilities  "
        }
      ],
      "ntee_codes": [
        {
          "ntee_code": "A00",
          "ntee_code_description": "Humanities"
        }
      ],
      "subsection_code": {
        "subsection_code": "03",
        "subsection_code_description": "501(c)(3) Public Charity"
      },
      "foundation_code": {
        "foundation_code": "15",
        "foundation_code_description": "50% tax deductible"
      }
    },
    "financials": {
      "most_recent_year": {
        "form_types": "990",
        "fiscal_year": 2020,
        "total_revenue": 2349999,
        "total_expenses": 22224499,
        "total_assets": 57426592
      },
      "bmf_gross_receipts": 2349999,
      "bmf_assets": 1849900,
      "required_to_file_990t": false,
      "a_133_audit_performed": false
    },
    "dates": {
      "seal_last_modified": "2020-01-01T01:01:01:01.000Z",
      "profile_last_modified": "2020-01-01T01:01:01:01.000Z",
      "dei_last_modified": "2020-01-01T01:01:01:01.000Z",
      "financials_last_modified": "2020-01-01T01:01:01:01.000Z",
      "last_published": "2020-01-01T01:01:01:01.000Z"
    }
  }
  ];
*/


const indexedData = {};

data.map( (datum) => {
  indexedData[datum.id]= datum;
})

export {data, indexedData};

