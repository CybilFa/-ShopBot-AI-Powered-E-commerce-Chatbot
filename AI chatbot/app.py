from flask import Flask, render_template, request, jsonify
from bot import get_bot_response

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/get", methods=["POST"])
def chatbot_response():
    user_input = request.json.get("message")
    data = request.get_json()
    user_message= data["message"]
    response = get_bot_response(user_message)
    return jsonify({"reply": response})


if __name__ == '__main__':
    app.run(debug=True)  
    # default host= http://127.0.0.1  port=5000  (http://127.0.0.1:5000 )

