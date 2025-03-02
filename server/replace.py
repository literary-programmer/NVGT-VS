import os

# Strings to be replaced and their replacements
target = [
	"'reserved'",
	"'identifier'",
	"'number'",
	"'string'",
	"'comment'",
]
replace = [
	"TokenKind.Reserved",
	"TokenKind.Identifier",
	"TokenKind.Number",
	"TokenKind.String",
	"TokenKind.Comment",
]

# Function to perform the replacement
def replace_in_file(file_path, target, replace):
	with open(file_path, 'r', encoding='utf-8') as file:
		content = file.read()

	original_content = content
	for t, r in zip(target, replace):
		content = content.replace(t, r)

	if content != original_content:
		with open(file_path, 'w', encoding='utf-8') as file:
			file.write(content)
		print(f"Replaced text in {file_path}")

# Function to search files and perform replacements if conditions are met
def search_and_replace(directory, target, replace):
	for root, dirs, files in os.walk(directory):
		for name in files:
			file_path = os.path.join(root, name)
			replace_in_file(file_path, target, replace)

# Start processing in the 'src' directory
if __name__ == '__main__':
	search_and_replace('src', target, replace)
