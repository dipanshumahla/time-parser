# Time Latest Story API

This is a small project where I create a REST API to get the latest stories from [https://time.com](https://time.com).

> **Note:** This project is made without using any 3rd party libraries.

## Installation

As no external/3rd party library is used you don't have to install anything.

## Usage

```ssh
npm start
```

## Time Stories API endpoint

``` http://<localhost>:3000/timeStories ```

### Response Example:
```
[
  {
    "link": "https://time.com/6166629/bono-america-greatest-song/",
    "title": "Bono: America Might Be the Greatest Song the World Has Yet to Hear"
  },
  {
    "link": "https://time.com/6167995/poland-ukraine-refugees/",
    "title": "Ukrainian Refugees Try to Find Their Way in Poland"
  },
  {
    "link": "https://time.com/6168041/covid-19-test-to-treat/",
    "title": "The Key Policy We Need to End the Pandemic Is Being Ignored"
  },
  {
    "link": "https://time.com/6168354/child-welfare-system-dorothy-roberts/",
    "title": "Behind the Racial Disparities in the US Child-Welfare System"
  },
  {
    "link": "https://time.com/6168310/overtime-pay-history/",
    "title": "America Gave Up on Overtime—and It’s Costing Workers $35,451 a Year"
  },
  {
    "link": "https://time.com/6166462/covid-19-deaths-grief-stories/",
    "title": "Don't Say You 'Can't Imagine' the Grief of Those Who Have Lost Loved Ones. Ask Them to Tell You Their Stories"
  }
]
```