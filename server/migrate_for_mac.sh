# export FLASK_APP=hcmk_server.app
# export FLASK_ENV=development

python3 db/scripts/create_db.py
flask db upgrade
python3 db/scripts/initialize_hcmk_data.py

