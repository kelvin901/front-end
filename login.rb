require 'sinatra'
require 'sinatra/cross_origin'
require 'json'

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
  response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
  response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
end

# Endpoint for handling login
post '/login' do
  cross_origin # Allow cross-origin requests

  # Retrieve the username and password from the request body
  request_body = JSON.parse(request.body.read)
  username = request_body['username']
  password = request_body['password']

  # Perform authentication logic here (e.g., check credentials against a database)
  # For simplicity, let's assume successful login with any username/password
  if username && password
    # Successful login
    { message: 'Login successful' }.to_json
  else
    # Failed login
    status 401
    { error: 'Invalid credentials' }.to_json
  end
end
