const BOOK_URL = `http://localhost:3000/books`

let bookList = [];

window.onload = function () {
    fetchBooks();
}

document.getElementById('submitForm').onsubmit = async function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;
    const publishedDate = document.getElementById('publishedDate').value;
    const author = document.getElementById('author').value
    const id = document.getElementById('hiddenInput').value;

    if (id) {

        const response = await fetch(`${BOOK_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, isbn, publishedDate, author })
        })

        if (response.ok) {
            fetchBooks();

            document.getElementById('form-title').innerText = 'Add a new Book'
            document.getElementById('submitForm').reset();
            document.getElementById('hiddenInput').value = "";


        }

    } else {
        const response = await fetch(BOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, isbn, publishedDate, author })
        })

        if (response.ok) {
            fetchBooks();

            document.getElementById('submitForm').reset();
        }
    }
}

async function fetchBooks() {
    const response = await fetch(BOOK_URL);
    const responseData = await response.json();
    if (response.ok && responseData?.length > 0) {
        bookList = responseData;


        let html = ''
        responseData.forEach((book) => {
            html += `<tr data-id=${book.id} >
                <td>${book.title}</td>
                <td>${book.isbn}</td>
                <td>${book.publishedDate}</td>
                <td>${book.author}</td>
                <td>
                    <div>
                        <button onclick="updateBook(this)" class="btn btn-primary">Edit</button>
                        &nbsp;&nbsp;
                        <button onclick="deleteBook(this)" class="btn btn-danger" >Delete</button>
                    </div>
                </td>
            </tr>`
        })

        document.getElementById('bookList').innerHTML = html;
    }
}

async function deleteBook(element) {
    const row = element.closest('tr');
    const id = row.dataset.id;

    const response = await fetch(`${BOOK_URL}/${id}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        row.remove();
    }
}

async function updateBook(element) {
    document.getElementById('form-title').innerText = 'Edit Book'

    const row = element.closest('tr');
    const id = row.dataset.id;
    const book = bookList.find((s) => s.id == id);

    document.getElementById('title').value = book.title;
    document.getElementById('isbn').value = book.isbn;
    document.getElementById('publishedDate').value = book.publishedDate;
    document.getElementById('author').value = book.author
    document.getElementById('hiddenInput').value = id;

}