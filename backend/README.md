# Instructions:

## First Time Setup

Make sure you are in the `backend` directory. Use the `cd` command.

```sh
$ poetry env use python
$ poetry install
$ poetry run spacy download en_core_web_sm
```

## Running the Server (After Setup)

Everything above must be done.

```sh
$ poetry env use python
$ poetry run uvicorn main:app --reload 
```
