---
sidebar_position: 3
displayed_sidebar: techdoc
---

# Create an invite to sign for a merged document group

![POST](/img/api/post.png "POST")
    
    https://api-eval.signnow.com/documentgroup/{{group_id}}/groupinvite
 
 Creates an invite to sign for a merged document group. 

 **Requirements (if any):**

    TBD. It is necessary to specify special requirements from the developers of the API.

## Request

### Headers

**Authorization** string (Required)

Bearer followed by token

Default: `Bearer {{token}}`

### Body

![Body structure](/img/api/str.png "Body structure")


### Request example
Content-Type: application/json

TBD. It is necessary to get from the API developers versions of the code in all languages (Python, C, JS (Fetch, jQuery, Axios, XMLHttpRequest) etc.).

<details>
  <summary>Use this code as a request example</summary>

```
curl --location --request POST 'https://api-eval.signnow.com/documentgroup/{{group_id}}/groupinvite' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{token}}' \
--data-raw
'{
    "invite_steps": [
        {
            "order": 1,
            "invite_emails": [
                {
                    "email": "{{signer_email}}",
                    "subject": "Signer 1",
                    "expiration_days": 30
                }
            ],
            "invite_actions": [
                {
                    "email": "{{signer_email}}",
                    "role_name": "Signer 1",
                    "action": "sign",
                    "document_id": "{{doc_id1}}",
                    "allow_reassign": "0",
                    "decline_by_signature": "0"
                },
                {
                    "email": "{{signer_email}}",
                    "role_name": "Signer 1",
                    "action": "sign",
                    "document_id": "{{doc_id2}}",
                    "allow_reassign": "0",
                    "decline_by_signature": "0"
                }
            ]
        }
    ],
    "completion_emails": [],
    "sign_as_merged": true
}'

```
</details>

### Responses

![200](/img/api/200.png "200")

### Body

Content-Type: application/json

<details>
  <summary>Use this code as a response example</summary>

```
Code for response example. TBD. 
It is necessary to specify the response code from the developers of the API.
```
</details>