json.extract! @user, :id, :firstname, :lastname, :email, :created_at




$.ajax({
    method: "DELETE",
    url: '/api/session',
})