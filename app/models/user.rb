class User < ApplicationRecord
    validates :firstname, :lastname, :email, :session_token, :password_digest, presence: true
    validates :email, uniqueness: true 
    validates :password, presence: true, length: {minimum: 6}, allow_nil: true 
    before_validation :ensure_session_token

    attr_reader :password

    has_many :reviews

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.check_password?(password)
        nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def check_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save! 
        self.session_token
    end


end




