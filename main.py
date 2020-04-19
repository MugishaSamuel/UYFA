from flask import Flask, render_template,request,redirect,url_for, request, redirect
import requests
import json

app = Flask(__name__)
# app.debug = True

@app.route('/')
def index():

	return render_template('index.html', title="UYFA | Home")



@app.route('/donations')
def donations():
	return render_template('payments.html', title="Make donations")


@app.route('/visapayment', methods=['GET','POST'])
def visapayment():

	if request.method == "POST":
		#you will add these validations to check if a user is putting correct information.
		amount = request.form['amount']
		name = request.form['name']
		card_no = request.form['card']
		cvv = request.form['cvv']
		month = request.form['month']
		year = request.form['year']
		email = request.form['email']
		add = request.form['address']
		city = request.form['city']
		state = request.form['state']
		zip_ = request.form['zip']
		country = request.form['country']
		phone = request.form['phone']
		ref = request.form['ref']
		reason = request.form['reason']

		payload = {
			"username": "b20f92f474ba55a6", # put that username easy pay will provide after enabling the api access.
			"password": "3c48a792900e1b74", # same story here.
			"action":"cardpayment",
			"amount": amount,
			"currency":"USD",
			"name": name,
			"cardno": card_no,
			"cvv": cvv,
			"month": month,
			"year": year,
			"email": email,
			"address": add,
			"city": city,
			"state": state,
			"zip": zip_,
			"country": country,
			"phone": phone,
			"reference": ref,
			"reason": reason
		}

		url =  "https://www.easypay.co.ug/api/"
		headers = {
    		'Content-Type': 'application/json'
		}

		r = requests.post(url, headers=headers, data=json.dumps(payload))

		print(r.status_code) # if it prints 200 or something like  that it will be indicating that the easy pay server received the request and returned a response.
		print(r.json()) # this will be a json object with inforamtion that will indicate whether the process was successful or not.

		return redirect(url_for('index'))
		
	

if __name__ == '__main__':
	app.run(host='127.0.0.1', port=8080)


