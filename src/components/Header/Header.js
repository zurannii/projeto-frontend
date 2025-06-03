                    {isLoggedIn ? (
                        <Link href="/cadastro">
                            <FaUserCircle size={30} className="userIcon" />
                        </Link>
                    ) : (
                        <Link href="/login" className="loginLink">
                            Login
                        </Link>
                    )} 