import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/e1d700a0-2e89-46c5-8bb7-76b8a21feb7e.png" 
              alt="AS design" 
              className="h-10"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-brand-navy hover:text-brand-blue transition-colors">Услуги</a>
            <a href="#portfolio" className="text-brand-navy hover:text-brand-blue transition-colors">Портфолио</a>
            <a href="#cases" className="text-brand-navy hover:text-brand-blue transition-colors">Кейсы</a>
            <a href="#reviews" className="text-brand-navy hover:text-brand-blue transition-colors">Отзывы</a>
            <a href="#contact" className="text-brand-navy hover:text-brand-blue transition-colors">Контакты</a>
          </nav>
          <Button className="bg-brand-blue hover:bg-brand-navy text-white">
            Заказать презентацию
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Презентации, которые{' '}
              <span className="bg-gradient-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent">
                продают
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Создаем эффектные презентации для бизнеса, которые захватывают внимание 
              и приводят к результату
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-brand-green hover:bg-brand-cyan text-white px-8 py-4 text-lg">
                <Icon name="Play" className="mr-2" />
                Смотреть портфолио
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg">
                <Icon name="MessageCircle" className="mr-2" />
                Обсудить проект
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-brand-cyan mb-2">500+</div>
                <div className="text-white/80">Готовых презентаций</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-brand-green mb-2">98%</div>
                <div className="text-white/80">Довольных клиентов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-brand-cyan mb-2">24ч</div>
                <div className="text-white/80">Средний срок</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-brand-navy mb-4">Наши услуги</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Полный спектр услуг по созданию презентаций для вашего бизнеса
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-blue">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Presentation" className="text-brand-blue" size={24} />
                </div>
                <CardTitle className="text-brand-navy">Бизнес-презентации</CardTitle>
                <CardDescription>
                  Презентации для инвесторов, партнеров и клиентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" className="mr-2 text-brand-green" size={16} />Питч-деки</li>
                  <li className="flex items-center"><Icon name="Check" className="mr-2 text-brand-green" size={16} />Корпоративные презентации</li>
                  <li className="flex items-center"><Icon name="Check" className="mr-2 text-brand-green" size={16} />Отчеты и аналитика</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-green">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-brand-green" size={24} />
                </div>
                <CardTitle className="text-brand-navy">Продающие презентации</CardTitle>
                <CardDescription>
                  Презентации, которые конвертируют аудиторию в клиентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" className="mr-2 text-brand-green" size={16} />Коммерческие предложения</li>
                  <li className="flex items-center"><Icon name="Check" className="mr-2 text-brand-green" size={16} />Презентации продуктов</li>
                  <li className="flex items-center"><Icon name="Check" className="mr-2 text-brand-green" size={16} />Лендинги в PPT</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-purple">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" className="text-brand-purple" size={24} />
                </div>
                <CardTitle className="text-brand-navy">Образовательный контент</CardTitle>
                <CardDescription>
                  Презентации для обучения и тренингов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" className="mr-2 text-brand-green" size={16} />Обучающие курсы</li>
                  <li className="flex items-center"><Icon name="Check" className="mr-2 text-brand-green" size={16} />Вебинары</li>
                  <li className="flex items-center"><Icon name="Check" className="mr-2 text-brand-green" size={16} />Мастер-классы</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-brand-navy mb-4">Портфолио</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Примеры наших работ для разных сфер бизнеса
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-lg h-48 flex items-center justify-center mb-4 group-hover:shadow-xl transition-all duration-300">
                  <Icon name="FilePresentation" className="text-white" size={48} />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">Проект {item}</h3>
                <p className="text-gray-600 text-sm">Описание проекта и результатов</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-brand-navy mb-4">Кейсы</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Реальные результаты наших клиентов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-brand-green">
              <CardHeader>
                <CardTitle className="text-brand-navy">IT-стартап привлек $2M</CardTitle>
                <CardDescription>Питч-дек для инвесторов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Создали убедительную презентацию для стартапа, которая помогла привлечь 
                  инвестиции на сумму $2 миллиона в seed-раунде.
                </p>
                <div className="flex items-center text-brand-green font-semibold">
                  <Icon name="TrendingUp" className="mr-2" size={16} />
                  Результат: $2M инвестиций
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-brand-blue">
              <CardHeader>
                <CardTitle className="text-brand-navy">Увеличение продаж на 150%</CardTitle>
                <CardDescription>Коммерческое предложение</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Разработали серию презентаций для отдела продаж, что привело к 
                  значительному росту конверсии и объема продаж.
                </p>
                <div className="flex items-center text-brand-blue font-semibold">
                  <Icon name="BarChart" className="mr-2" size={16} />
                  Результат: +150% к продажам
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-brand-navy mb-4">Отзывы</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Что говорят наши клиенты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Александр Петров", company: "CEO, TechStart", text: "Потрясающая работа! Презентация помогла нам закрыть важную сделку.", rating: 5 },
              { name: "Мария Иванова", company: "Директор по маркетингу", text: "Профессиональный подход и отличный результат. Рекомендую!", rating: 5 },
              { name: "Дмитрий Сидоров", company: "Основатель стартапа", text: "Благодаря презентации от AS design мы привлекли инвестиции!", rating: 5 }
            ].map((review, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <div>
                    <div className="font-semibold text-brand-navy">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-brand-navy to-brand-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-4">Начнем работу над вашим проектом</h2>
            <p className="text-xl text-center text-white/90 mb-12">
              Расскажите о своих задачах, и мы создадим презентацию, которая поразит аудиторию
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Mail" className="mr-4" size={20} />
                    <span>hello@asdesign.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" className="mr-4" size={20} />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" className="mr-4" size={20} />
                    <span>Москва, Россия</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Следите за нами</h4>
                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                      <Icon name="Send" size={16} />
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                      <Icon name="Linkedin" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Обсудить проект</CardTitle>
                  <CardDescription className="text-white/80">
                    Заполните форму, и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                  <Input placeholder="Email" type="email" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                  <Input placeholder="Телефон" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                  <Textarea 
                    placeholder="Расскажите о своем проекте" 
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Button className="w-full bg-brand-green hover:bg-brand-cyan text-white">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <img 
              src="https://cdn.poehali.dev/files/e1d700a0-2e89-46c5-8bb7-76b8a21feb7e.png" 
              alt="AS design" 
              className="h-8 mx-auto mb-4 filter brightness-0 invert"
            />
          </div>
          <p className="text-white/70">
            © 2024 AS design. Все права защищены. Создаем презентации, которые работают.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Index;