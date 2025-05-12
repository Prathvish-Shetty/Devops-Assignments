from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def register():
  name = email = None
  if request.method == 'POST':
    name = request.form['name']
    email = request.form['email']
  return render_template("register.html", name=name, email=email)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=5000, debug=True)