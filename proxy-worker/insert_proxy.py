with open('/etc/nginx/sites-enabled/errordon', 'r') as f:
    content = f.read()

block = """  # Radio stream proxy (HTTP->HTTPS)
  location /radio-proxy/ {
    proxy_pass http://127.0.0.1:3001/;
    proxy_http_version 1.1;
    proxy_buffering off;
    proxy_cache off;
  }

"""

# Insert before the LAST occurrence of '  location / {'
idx = content.rfind('  location / {')
if idx == -1:
    print('ERROR: location / not found')
else:
    new_content = content[:idx] + block + content[idx:]
    with open('/etc/nginx/sites-enabled/errordon', 'w') as f:
        f.write(new_content)
    print('OK: inserted radio-proxy block')
